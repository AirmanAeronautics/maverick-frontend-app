# Fixing Figma MCP Error in Cursor

## Quick Fix Steps

### Step 1: Enable Figma Desktop MCP Server

1. **Open the Figma Desktop App** (not the web version)
   - Download from: https://www.figma.com/downloads/
   - Make sure it's updated to the latest version

2. **Open or create a Figma Design file**

3. **Enable Dev Mode**
   - Press `Shift + D` or click the Dev Mode toggle in the toolbar

4. **Enable the MCP Server**
   - In the **MCP server** section of the inspect panel (right side)
   - Click **"Enable desktop MCP server"**
   - You should see a confirmation message: "Server is enabled and running"

### Step 2: Verify Cursor Configuration

1. **Open Cursor Settings**
   - Go to **Cursor → Settings → Cursor Settings**
   - Navigate to **Tools & MCP** tab

2. **Check/Update MCP Server Configuration**
   - The configuration should look like this:
   ```json
   {
     "mcpServers": {
       "figma-desktop": {
         "url": "http://127.0.0.1:3845/mcp"
       }
     }
   }
   ```

3. **If the server is not configured:**
   - Click **"+ Add new global MCP server"**
   - Enter the configuration above
   - Save

### Step 3: Clear and Re-authenticate (If Still Having Issues)

1. **Open Command Palette**
   - Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)

2. **Clear MCP Tokens**
   - Type: "Clear All MCP Tokens"
   - Select it and follow the prompts

3. **Restart Cursor**
   - Close and reopen Cursor completely

### Step 4: Verify Connection

1. **Make sure Figma desktop app is running**
2. **Make sure a Figma file is open** (the server only runs when a file is active)
3. **Check the MCP status in Cursor**
   - Go to **Tools & MCP** settings
   - The Figma server should show "Ready" instead of "Error"

## Common Issues

### Issue: "Error - Show Output" persists
**Solution:**
- Ensure Figma desktop app is running (not just the browser)
- Make sure you're in Dev Mode (`Shift + D`)
- Verify the MCP server is enabled in Figma
- Restart both Figma and Cursor

### Issue: Tools not loading
**Solution:**
- Check that the server URL is correct: `http://127.0.0.1:3845/mcp`
- Verify no firewall is blocking localhost:3845
- Try disabling and re-enabling the MCP server in Figma

### Issue: Connection timeout
**Solution:**
- Make sure the Figma file is open and active
- The MCP server only runs when a file is open in the desktop app
- Try opening a different Figma file

## Testing the Connection

Once configured, you can test by:
1. Opening a Figma file in the desktop app
2. Selecting a frame or component
3. In Cursor chat, try: `#get_design_context` or ask about the selected design

If tools are available, the connection is working!

## Need More Help?

- Check Figma MCP documentation: https://developers.figma.com/docs/figma-mcp-server/
- Cursor MCP docs: https://docs.cursor.com/context/model-context-protocol






