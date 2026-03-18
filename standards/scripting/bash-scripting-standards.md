# Bash Scripting Standards for Azure Local Toolkit

## Overview

This document defines the coding standards and best practices for Bash scripts used in the Azure Local Toolkit. All Bash scripts interact with Azure CLI and must follow these conventions for consistency, maintainability, and reliability.

**Key Requirements:**
- All scripts must read configuration from `infrastructure.yml` (never hardcoded values)
- All scripts must pass ShellCheck linting
- All scripts must use the standardized naming pattern (`az-verb-resource.sh`)
- All scripts must include proper error handling and logging

**Related Standards:**
- [Scripting Standards](./scripting-standards.mdx) - PowerShell and overall scripting standards
- [Scripting Framework](./scripting-framework.mdx) - Config-driven script architecture
- [PowerShell Organization](./powershell-organization-standard.mdx) - Directory structure and organization

## File Naming Conventions

### Script Names

**Azure CLI (Bash) scripts must follow this pattern:**
- Use **lowercase with hyphens**
- Follow the `az-verb-resource.sh` pattern
- Examples:
  - `az-create-vnet.sh`
  - `az-deploy-resources.sh`
  - `az-get-subscription.sh`
  - `az-test-connectivity.sh`

**For remote/management-box execution scripts:**
- Prefix with `invoke-` (e.g., `invoke-deploy-cluster.sh`)

### Common Verbs
| Verb | Usage |
|------|-------|
| `create` | Create new resources |
| `set` | Configure or update existing resources |
| `get` | Retrieve information |
| `test` | Validate or verify |
| `delete` | Delete resources |
| `invoke` | Execute an action (especially for remote scripts) |
| `sync` | Synchronize data |

## File Structure

### Required Header

Every Bash script must include this header template:

```bash
#!/bin/bash
#===============================================================================
# Script Name: script-name.sh
# Description: Brief description of what the script does
# Author: TierPoint ProdTech Team
# Created: YYYY-MM-DD
# Modified: YYYY-MM-DD
# Version: 1.0.0
#
# Dependencies:
#   - Azure CLI (az) version 2.50.0+
#   - jq for JSON processing
#
# Usage:
#   ./script-name.sh [options]
#
# Parameters:
#   -c, --config    Path to configuration file (required)
#   -e, --environment   Environment name (dev|staging|prod)
#   -v, --verbose   Enable verbose output
#   -h, --help      Show this help message
#
# Exit Codes:
#   0 - Success
#   1 - General error
#   2 - Invalid arguments
#   3 - Azure CLI error
#   4 - Configuration error
#===============================================================================
```

### Script Sections

Organize scripts in this order:

```bash
#!/bin/bash
# Header (as above)

#===============================================================================
# CONFIGURATION
#===============================================================================
set -euo pipefail
IFS=$'\n\t'

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPT_NAME="$(basename "${BASH_SOURCE[0]}")"

# Default values
VERBOSE=false
DRY_RUN=false
CONFIG_FILE=""
ENVIRONMENT=""

#===============================================================================
# LOGGING FUNCTIONS
#===============================================================================
log_info() {
    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') - $*"
}

log_warn() {
    echo "[WARN] $(date '+%Y-%m-%d %H:%M:%S') - $*" >&2
}

log_error() {
    echo "[ERROR] $(date '+%Y-%m-%d %H:%M:%S') - $*" >&2
}

log_debug() {
    if [[ "$VERBOSE" == true ]]; then
        echo "[DEBUG] $(date '+%Y-%m-%d %H:%M:%S') - $*"
    fi
}

#===============================================================================
# HELPER FUNCTIONS
#===============================================================================
show_help() {
    grep '^#' "$0" | grep -E '^# (Usage|Parameters|Exit)' -A 100 | head -20
}

check_dependencies() {
    local deps=("az" "jq")
    for dep in "${deps[@]}"; do
        if ! command -v "$dep" &> /dev/null; then
            log_error "Required dependency '$dep' is not installed"
            exit 1
        fi
    done
}

check_azure_login() {
    if ! az account show &> /dev/null; then
        log_error "Not logged in to Azure CLI. Run 'az login' first."
        exit 3
    fi
}

#===============================================================================
# CONFIGURATION LOADING
#===============================================================================
load_config() {
    local config_file="$1"
    
    if [[ ! -f "$config_file" ]]; then
        log_error "Configuration file not found: $config_file"
        exit 4
    fi
    
    # Load YAML config using yq or parse manually
    log_info "Loading configuration from: $config_file"
}

#===============================================================================
# ARGUMENT PARSING
#===============================================================================
parse_arguments() {
    while [[ $# -gt 0 ]]; do
        case "$1" in
            -c|--config)
                CONFIG_FILE="$2"
                shift 2
                ;;
            -e|--environment)
                ENVIRONMENT="$2"
                shift 2
                ;;
            -v|--verbose)
                VERBOSE=true
                shift
                ;;
            --dry-run)
                DRY_RUN=true
                shift
                ;;
            -h|--help)
                show_help
                exit 0
                ;;
            *)
                log_error "Unknown option: $1"
                show_help
                exit 2
                ;;
        esac
    done
}

validate_arguments() {
    if [[ -z "$CONFIG_FILE" ]]; then
        log_error "Configuration file is required. Use -c or --config"
        exit 2
    fi
    
    if [[ -z "$ENVIRONMENT" ]]; then
        log_error "Environment is required. Use -e or --environment"
        exit 2
    fi
}

#===============================================================================
# MAIN FUNCTIONS
#===============================================================================
# Add your main logic functions here

#===============================================================================
# MAIN EXECUTION
#===============================================================================
main() {
    log_info "Starting $SCRIPT_NAME"
    
    parse_arguments "$@"
    validate_arguments
    check_dependencies
    check_azure_login
    load_config "$CONFIG_FILE"
    
    # Main script logic here
    
    log_info "Completed $SCRIPT_NAME"
}

# Run main function
main "$@"
```

## Error Handling

### Required Settings

Always include these settings at the top of scripts:

```bash
set -euo pipefail
IFS=$'\n\t'
```

| Setting | Purpose |
|---------|---------|
| `-e` | Exit immediately on error |
| `-u` | Treat unset variables as errors |
| `-o pipefail` | Pipeline fails if any command fails |
| `IFS=$'\n\t'` | Safer word splitting |

### Error Trapping

Use trap for cleanup and error reporting:

```bash
cleanup() {
    local exit_code=$?
    # Cleanup temporary files
    if [[ -n "${TEMP_DIR:-}" && -d "$TEMP_DIR" ]]; then
        rm -rf "$TEMP_DIR"
    fi
    exit $exit_code
}

trap cleanup EXIT

error_handler() {
    local line_number=$1
    local command="$2"
    log_error "Command '$command' failed at line $line_number"
}

trap 'error_handler ${LINENO} "$BASH_COMMAND"' ERR
```

## Azure CLI Best Practices

### Consistent Output Format

Always use JSON output for parsing:

```bash
# Good - explicit JSON output
result=$(az group list --output json)

# Parse with jq
resource_group=$(echo "$result" | jq -r '.[0].name')
```

### Resource Creation Pattern

```bash
create_resource_group() {
    local name="$1"
    local location="$2"
    local tags="$3"
    
    log_info "Creating resource group: $name in $location"
    
    if az group show --name "$name" &> /dev/null; then
        log_warn "Resource group '$name' already exists"
        return 0
    fi
    
    if [[ "$DRY_RUN" == true ]]; then
        log_info "[DRY-RUN] Would create resource group: $name"
        return 0
    fi
    
    az group create \
        --name "$name" \
        --location "$location" \
        --tags $tags \
        --output json
    
    log_info "Created resource group: $name"
}
```

### Subscription Context

Always explicitly set subscription context:

```bash
set_subscription() {
    local subscription_id="$1"
    
    log_info "Setting subscription context: $subscription_id"
    az account set --subscription "$subscription_id"
    
    # Verify
    current=$(az account show --query id --output tsv)
    if [[ "$current" != "$subscription_id" ]]; then
        log_error "Failed to set subscription context"
        exit 3
    fi
}
```

## Variable Conventions

### Naming

- Use **UPPERCASE** for environment variables and constants
- Use **lowercase** for local variables
- Use **snake_case** for multi-word variables

```bash
# Constants (uppercase)
readonly AZURE_LOCATION="eastus2"
readonly MAX_RETRIES=3

# Environment variables (uppercase)
export ARM_SUBSCRIPTION_ID="${ARM_SUBSCRIPTION_ID:-}"

# Local variables (lowercase with underscores)
local resource_group_name=""
local deployment_name=""
```

### Configuration Variables

Reference variables from config files using consistent patterns:

```bash
# Load from YAML config
get_config_value() {
    local key="$1"
    local config_file="$2"
    
    # Using yq
    yq eval ".$key" "$config_file"
}

# Example usage
location=$(get_config_value "azure.location" "$CONFIG_FILE")
environment=$(get_config_value "deployment.environment" "$CONFIG_FILE")
```

## ShellCheck Compliance

All scripts must pass ShellCheck with no warnings. Common rules:

### SC2086 - Quote Variables
```bash
# Bad
echo $variable

# Good
echo "$variable"
```

### SC2155 - Separate Declaration and Assignment
```bash
# Bad
local result=$(some_command)

# Good
local result
result=$(some_command)
```

### SC2034 - Unused Variables
```bash
# Mark intentionally unused variables
# shellcheck disable=SC2034
UNUSED_VAR="intentionally unused"
```

### Running ShellCheck

```bash
# Check single file
shellcheck script-name.sh

# Check all scripts
find scripts/ -name "*.sh" -exec shellcheck {} \;

# With specific severity
shellcheck --severity=warning script-name.sh
```

## Testing

### Test Script Structure

Create companion test files using the pattern `test-<script-name>.sh`:

```bash
#!/bin/bash
# test-new-resource-group.sh

source "./test-helpers.sh"

test_create_resource_group_success() {
    # Arrange
    local name="test-rg-$$"
    local location="eastus2"
    
    # Act
    ./new-resource-group.sh --name "$name" --location "$location"
    local result=$?
    
    # Assert
    assert_equals 0 $result "Should create resource group successfully"
    
    # Cleanup
    az group delete --name "$name" --yes --no-wait
}

# Run tests
run_tests
```

## Integration with PowerShell Scripts

When Bash scripts work alongside PowerShell scripts:

1. Use the same configuration files (YAML)
2. Follow parallel naming conventions:
   - PowerShell: `New-ResourceGroup.ps1`
   - Bash: `new-resource-group.sh`
3. Use consistent exit codes
4. Log to the same log directory structure

## Documentation

### Inline Comments

```bash
# Single-line comments for brief explanations
variable="value"  # Inline comment for specific lines

#-------------------------------------------------------------------------------
# Section comments for logical groupings
# Use multiple lines for complex explanations
#-------------------------------------------------------------------------------
```

### Function Documentation

```bash
#######################################
# Creates a new Azure resource group
# Globals:
#   AZURE_LOCATION - Default Azure region
# Arguments:
#   $1 - Resource group name (required)
#   $2 - Location (optional, defaults to AZURE_LOCATION)
# Outputs:
#   Writes resource group JSON to stdout
# Returns:
#   0 if successful, non-zero on error
#######################################
create_resource_group() {
    local name="$1"
    local location="${2:-$AZURE_LOCATION}"
    # Implementation
}
```

## Version Control

### Pre-commit Checks

Add to `.pre-commit-config.yaml`:

```yaml
repos:
  - repo: https://github.com/shellcheck-py/shellcheck-py
    rev: v0.9.0.5
    hooks:
      - id: shellcheck
        args: ["--severity=warning"]
```

### Changelog

Maintain version history in script headers and update when making changes.

---

## Quick Reference

| Aspect | Standard |
|--------|----------|
| File naming | `lowercase-with-hyphens.sh` |
| Variables (const) | `UPPERCASE_SNAKE_CASE` |
| Variables (local) | `lowercase_snake_case` |
| Functions | `lowercase_snake_case()` |
| Error handling | `set -euo pipefail` |
| Output format | JSON with jq parsing |
| Linting | ShellCheck with no warnings |

---

*Document Version: 1.0.0*  
*Last Updated: 2026-02-01*  
*Maintained by: TierPoint ProdTech Team*
