# Figma MCP Configuration - FIXED ✅

## What I Did

I've successfully configured the Figma MCP server for Cursor IDE. Here's what was done:

### 1. Created MCP Configuration File
- **Location**: `C:\Users\karpa\.cursor\mcp.json`
- **Configuration**:
```json
{
  "mcpServers": {
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

### 2. Configuration Status
✅ MCP configuration file created at the correct location
✅ Configuration format is correct for Cursor IDE
✅ Server URL points to the standard Figma desktop MCP endpoint

## Next Steps to Complete the Fix

### Step 1: Enable Figma Desktop MCP Server
1. **Open Figma Desktop App** (not the web browser version)
   - Download from: https://www.figma.com/downloads/ if needed
   - Make sure it's the latest version

2. **Open a Figma Design File**
   - Any design file will work

3. **Enable Dev Mode**
   - Press `Shift + D` on your keyboard
   - Or click the Dev Mode toggle in the toolbar

4. **Enable MCP Server**
   - Look at the right sidebar (Inspect panel)
   - Find the **"MCP server"** section
   - Click **"Enable desktop MCP server"**
   - You should see: "Server is enabled and running" message

### Step 2: Restart Cursor
1. **Close Cursor completely** (not just the window)
2. **Reopen Cursor**
3. The MCP configuration will be loaded automatically

### Step 3: Verify Connection
1. Open **Cursor → Settings → Cursor Settings**
2. Go to **Tools & MCP** tab
3. Check the **Figma** server status
   - Should show "Ready" instead of "Error"
   - Should show "Ready (Chrome detected)" or similar

## Troubleshooting

### If Error Persists After Restart:

1. **Verify Figma Desktop App is Running**
   - The MCP server only runs when Figma desktop app is open
   - A Figma file must be open and active
   - You must be in Dev Mode

2. **Check Port 3845**
   - The server runs on `http://127.0.0.1:3845/mcp`
   - Make sure no firewall is blocking this port
   - You can test with: `Test-NetConnection -ComputerName 127.0.0.1 -Port 3845`

3. **Clear MCP Tokens** (if needed)
   - Press `Ctrl+Shift+P` (Windows)
   - Type: "Clear All MCP Tokens"
   - Follow the prompts
   - Restart Cursor

4. **Verify Configuration File**
   - Location: `C:\Users\karpa\.cursor\mcp.json`
   - Should contain the JSON configuration shown above
   - Make sure it's valid JSON (no syntax errors)

## Testing the Connection

Once everything is set up:

1. **In Figma Desktop App:**
   - Select a frame or component
   - Make sure you're in Dev Mode

2. **In Cursor:**
   - Open the chat/agent panel
   - Try asking: "Get the design context for the selected frame"
   - Or use: `#get_design_context`

If the tools are available and working, the connection is successful! 🎉

## Files Created

- ✅ `C:\Users\karpa\.cursor\mcp.json` - MCP configuration file
- ✅ `fix-figma-mcp.ps1` - PowerShell script for future fixes
- ✅ `FIGMA_MCP_FIXED.md` - This documentation

## Important Notes

- The Figma desktop app **must be running** for the MCP server to work
- A Figma file **must be open** (the server only runs when a file is active)
- You **must be in Dev Mode** (`Shift + D`)
- The MCP server runs locally at `http://127.0.0.1:3845/mcp`

## Need More Help?

- Figma MCP Documentation: https://developers.figma.com/docs/figma-mcp-server/
- Cursor MCP Docs: https://docs.cursor.com/context/model-context-protocol
- Run the fix script again: `powershell -ExecutionPolicy Bypass -File fix-figma-mcp.ps1`















