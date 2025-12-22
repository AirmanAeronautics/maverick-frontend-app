# ⚠️ IMPORTANT: Restart Cursor to Apply MCP Configuration

## Configuration Status
✅ **MCP configuration file has been created successfully!**
- Location: `C:\Users\karpa\.cursor\mcp.json`
- Configuration is correct and ready

## Required Action: Restart Cursor

**The configuration file has been created, but Cursor needs to be restarted to load it.**

### Steps:
1. **Save all your work** in Cursor
2. **Close Cursor completely** (close all windows)
3. **Reopen Cursor**
4. **Open this workspace** again

After restarting, the MCP configuration will be loaded automatically.

## After Restarting Cursor

### 1. Enable Figma Desktop MCP Server
Before the connection will work, you need to:

1. **Open Figma Desktop App** (download from https://www.figma.com/downloads/ if needed)
2. **Open any Figma design file**
3. **Press `Shift + D`** to enter Dev Mode
4. **In the right sidebar**, find the **"MCP server"** section
5. **Click "Enable desktop MCP server"**
6. You should see: "Server is enabled and running"

### 2. Verify Connection in Cursor
1. Go to **Cursor → Settings → Cursor Settings**
2. Navigate to **Tools & MCP** tab
3. Check the **Figma** server status
   - Should show "Ready" (not "Error")
   - The red error indicator should be gone

### 3. Test the Connection
1. In Figma: Select a frame or component
2. In Cursor: Open chat and try asking about the design
3. The MCP tools should be available

## Quick Checklist

- [ ] MCP config file created ✅ (Already done)
- [ ] Restart Cursor (YOU NEED TO DO THIS)
- [ ] Open Figma Desktop App
- [ ] Enable MCP server in Figma (Dev Mode → MCP section)
- [ ] Verify connection in Cursor Settings

## If Error Persists After Restart

1. Make sure Figma desktop app is running
2. Make sure a Figma file is open
3. Make sure you're in Dev Mode (`Shift + D`)
4. Try clearing MCP tokens: `Ctrl+Shift+P` → "Clear All MCP Tokens"
5. Restart both Figma and Cursor

## Configuration File Details

The configuration file at `C:\Users\karpa\.cursor\mcp.json` contains:

```json
{
  "mcpServers": {
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

This is the correct format for Cursor IDE. Once you restart Cursor and enable the server in Figma, it should work!












