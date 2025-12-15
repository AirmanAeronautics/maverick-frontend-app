# Figma MCP Configuration Fix Script for Cursor
# This script verifies and fixes the Figma MCP configuration

Write-Host "=== Figma MCP Configuration Fix ===" -ForegroundColor Cyan
Write-Host ""

# Check if .cursor directory exists
$cursorDir = "$env:USERPROFILE\.cursor"
if (-not (Test-Path $cursorDir)) {
    Write-Host "Creating .cursor directory..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $cursorDir -Force | Out-Null
}

# Check if mcp.json exists
$mcpConfigPath = "$cursorDir\mcp.json"
$configExists = Test-Path $mcpConfigPath

if ($configExists) {
    Write-Host "Found existing mcp.json configuration" -ForegroundColor Green
    try {
        $existingConfig = Get-Content $mcpConfigPath -Raw | ConvertFrom-Json
        Write-Host "Current configuration:" -ForegroundColor Yellow
        $existingConfig | ConvertTo-Json -Depth 10 | Write-Host
    } catch {
        Write-Host "Error reading existing config: $_" -ForegroundColor Red
    }
} else {
    Write-Host "mcp.json not found, creating new configuration..." -ForegroundColor Yellow
}

# Create/Update MCP configuration
$mcpConfig = @{
    mcpServers = @{
        "figma-desktop" = @{
            url = "http://127.0.0.1:3845/mcp"
        }
    }
}

# If existing config exists, merge it
if ($configExists) {
    try {
        $existingConfig = Get-Content $mcpConfigPath -Raw | ConvertFrom-Json
        if ($existingConfig.mcpServers) {
            # Merge existing servers
            foreach ($server in $existingConfig.mcpServers.PSObject.Properties) {
                if ($server.Name -ne "figma-desktop") {
                    $mcpConfig.mcpServers[$server.Name] = $server.Value
                }
            }
        }
    } catch {
        Write-Host "Could not merge existing config, creating new one..." -ForegroundColor Yellow
    }
}

# Write configuration
$jsonConfig = $mcpConfig | ConvertTo-Json -Depth 10
$jsonConfig | Out-File -FilePath $mcpConfigPath -Encoding utf8 -NoNewline

Write-Host ""
Write-Host "Configuration saved to: $mcpConfigPath" -ForegroundColor Green
Write-Host ""
Write-Host "Configuration content:" -ForegroundColor Cyan
Write-Host $jsonConfig
Write-Host ""

# Check if Figma MCP server is running
Write-Host "Checking Figma MCP server status..." -ForegroundColor Cyan
try {
    $connection = Test-NetConnection -ComputerName 127.0.0.1 -Port 3845 -WarningAction SilentlyContinue -InformationLevel Quiet
    if ($connection) {
        Write-Host "✓ Figma MCP server is running on port 3845" -ForegroundColor Green
    } else {
        Write-Host "✗ Figma MCP server is NOT running on port 3845" -ForegroundColor Red
        Write-Host ""
        Write-Host "To enable the Figma MCP server:" -ForegroundColor Yellow
        Write-Host "1. Open Figma Desktop App (not browser)" -ForegroundColor White
        Write-Host "2. Open a Figma design file" -ForegroundColor White
        Write-Host "3. Press Shift+D to enter Dev Mode" -ForegroundColor White
        Write-Host "4. In the right panel, find 'MCP server' section" -ForegroundColor White
        Write-Host "5. Click 'Enable desktop MCP server'" -ForegroundColor White
    }
} catch {
    Write-Host "✗ Could not check server status: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== Next Steps ===" -ForegroundColor Cyan
Write-Host "1. Make sure Figma Desktop App is running with MCP server enabled" -ForegroundColor White
Write-Host "2. Restart Cursor IDE to load the new configuration" -ForegroundColor White
Write-Host "3. Check Cursor Settings > Tools & MCP to verify connection" -ForegroundColor White
Write-Host ""





