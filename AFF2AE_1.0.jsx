 /**
 * AFF2AE_1.0 - Description of what the script does.
 *
 * Copyright (c) 2024 Leaveil Claasen
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function(){

    var parsedData;
    var pathTo;

    // Some UI from scriptui.joonas.me

    // DIALOG
    // ======
    var dialog = new Window("dialog"); 
    dialog.text = "Affinity JSON to AE"; 
    dialog.preferredSize.width = 300; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","center"]; 
    dialog.spacing = 16; 
    dialog.margins = 20; 

    // PANELFILETYPE
    // =============
    var panelFileType = dialog.add("panel", undefined, undefined, {name: "panelFileType", su1PanelCoordinates: true}); 
    panelFileType.text = "Select Filetype "; 
    panelFileType.orientation = "column"; 
    panelFileType.alignChildren = ["center","top"]; 
    panelFileType.spacing = 10; 
    panelFileType.margins = 10; 

    // GROUP1
    // ======
    var group1 = panelFileType.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 16; 
    group1.margins = 0; 

    var radiobutton1 = group1.add("radiobutton", undefined, undefined, {name: "radiobutton1"}); 
    radiobutton1.text = "EPS"; 
    radiobutton1.value = true; 

    var radiobutton2 = group1.add("radiobutton", undefined, undefined, {name: "radiobutton2"}); 
    radiobutton2.text = "PNG"; 

    // PANELCOMPSETTINGS
    // =================
    var panelCompSettings = dialog.add("panel", undefined, undefined, {name: "panelCompSettings", su1PanelCoordinates: true}); 
    panelCompSettings.text = "Comp Settings"; 
    panelCompSettings.orientation = "column"; 
    panelCompSettings.alignChildren = ["center","center"]; 
    panelCompSettings.spacing = 10; 
    panelCompSettings.margins = 16; 

    // GROUPCOMPNAME
    // =============
    var groupCompName = panelCompSettings.add("group", undefined, {name: "groupCompName"}); 
    groupCompName.orientation = "row"; 
    groupCompName.alignChildren = ["left","center"]; 
    groupCompName.spacing = 10; 
    groupCompName.margins = 0; 

    var statictext1 = groupCompName.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "Composition Name"; 

    var scriptCompName = groupCompName.add('edittext {properties: {name: "scriptCompName"}}'); 
    scriptCompName.text = "My Comp Name"; 

    // GROUPDIMENSIONS
    // ===============
    var groupDimensions = panelCompSettings.add("group", undefined, {name: "groupDimensions"}); 
    groupDimensions.orientation = "row"; 
    groupDimensions.alignChildren = ["left","center"]; 
    groupDimensions.spacing = 10; 
    groupDimensions.margins = 0; 

    // GROUPWIDTH
    // ==========
    var groupWidth = groupDimensions.add("group", undefined, {name: "groupWidth"}); 
    groupWidth.orientation = "row"; 
    groupWidth.alignChildren = ["center","center"]; 
    groupWidth.spacing = 10; 
    groupWidth.margins = 0; 

    var statictext2 = groupWidth.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "Width"; 

    var scriptWidth = groupWidth.add('edittext {justify: "center", properties: {name: "scriptWidth"}}'); 
    scriptWidth.text = "1920"; 
    scriptWidth.preferredSize.width = 52; 

    // GROUPHEIGHT
    // ===========
    var groupHeight = groupDimensions.add("group", undefined, {name: "groupHeight"}); 
    groupHeight.orientation = "row"; 
    groupHeight.alignChildren = ["center","center"]; 
    groupHeight.spacing = 10; 
    groupHeight.margins = 0; 

    var statictext3 = groupHeight.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Height"; 

    var scriptHeight = groupHeight.add('edittext {justify: "center", properties: {name: "scriptHeight"}}'); 
    scriptHeight.text = "1080"; 
    scriptHeight.preferredSize.width = 52; 

    // GROUPFRAMERATEDURATION
    // ======================
    var groupFramerateDuration = panelCompSettings.add("group", undefined, {name: "groupFramerateDuration"}); 
    groupFramerateDuration.orientation = "row"; 
    groupFramerateDuration.alignChildren = ["left","center"]; 
    groupFramerateDuration.spacing = 10; 
    groupFramerateDuration.margins = 0; 

    // GROUPFRAMERATE
    // ==============
    var groupFrameRate = groupFramerateDuration.add("group", undefined, {name: "groupFrameRate"}); 
    groupFrameRate.orientation = "row"; 
    groupFrameRate.alignChildren = ["center","center"]; 
    groupFrameRate.spacing = 10; 
    groupFrameRate.margins = 0; 

    var statictext4 = groupFrameRate.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "Framerate"; 

    var scriptFrameRate = groupFrameRate.add('edittext {justify: "center", properties: {name: "scriptFrameRate"}}'); 
    scriptFrameRate.text = "30"; 
    scriptFrameRate.preferredSize.width = 30; 

    // GROUPDIMENSIONS1
    // ================
    var groupDimensions1 = groupFramerateDuration.add("group", undefined, {name: "groupDimensions1"}); 
    groupDimensions1.orientation = "row"; 
    groupDimensions1.alignChildren = ["center","center"]; 
    groupDimensions1.spacing = 10; 
    groupDimensions1.margins = 0; 

    var statictext5 = groupDimensions1.add("statictext", undefined, undefined, {name: "statictext5"}); 
    statictext5.text = "Duration (s)"; 

    var scriptDuration = groupDimensions1.add('edittext {justify: "center", properties: {name: "scriptDuration"}}'); 
    scriptDuration.text = "20"; 
    scriptDuration.preferredSize.width = 30; 

    // GROUPBUTTONS
    // ============
    var groupButtons = dialog.add("group", undefined, {name: "groupButtons"}); 
    groupButtons.orientation = "row"; 
    groupButtons.alignChildren = ["center","center"]; 
    groupButtons.spacing = 10; 
    groupButtons.margins = 0; 

    var buttonImportJSON = groupButtons.add("button", undefined, undefined, {name: "buttonImportJSON"}); 
    buttonImportJSON.text = "Import JSON...";
    buttonImportJSON.onClick = function (){
        app.beginUndoGroup("Affinity JSON to AE");
        dialog.close();
        getSpineJSON();
        useSpineJSON(scriptCompName.text, scriptWidth.text, scriptHeight.text, scriptFrameRate.text, scriptDuration.text);
        app.endUndoGroup();
    }

    var buttonCancel = groupButtons.add("button", undefined, undefined, {name: "buttonCancel"}); 
    buttonCancel.text = "Cancel"; 

    dialog.show();
    dialog.center();

    // NON UI RELATED THINGS
    // =====================   

    function getSpineJSON(){

        // Browse to JSON file
        var jsonFile = File.openDialog('Select your Spine JSON file', "*.json", false);
        
        if(jsonFile != null){
            // Open file
            jsonFile.open("r", "TEXT", "UTF-8");

            // Read file and assign it to variable
            var jsonData = jsonFile.read();

            // Save path to a global variable
            pathTo = jsonFile.parent.fsName;

            // Close up file
            jsonFile.close();

            // Parse the JSON to a global variable
            parsedData = JSON.parse(jsonData);

        }else{
            alert("No JSON file selected.");
        }      
    }

    function useSpineJSON(compName, compWidth, compHeight, compFrameRate, compDuration){
        // Some local variables
        var bgX;
        var bgY;
        var typeFile;
        var tempFile;
        var osBrackets;
        var layerArr = [];
        var layerMissing = false;

        // Test the OS and set the brackets string in the empty variable osBrackets.
        // I had this in the loop before, imagine testing everytime. 
        if(osCheck()==="PC"){
            osBrackets = "\\";
        }else{
            osBrackets = "/";
        }

        // Check if the JSON data is in
        if(parsedData!=null && pathTo!=null){
                        
            // Setting filetype from values in dialog window.
            if(radiobutton1.value){typeFile = ".eps"}else{typeFile = ".png"};
            
            // Loop through and check if files exist
            for(var i = 0; i < parsedData.slots.length; i++){
                tempFile = new File(pathTo + osBrackets + parsedData.slots[i].name + typeFile);
                if(!tempFile.exists){
                    // Save the missing file names in the array layerArr.
                    layerArr.push(parsedData.slots[i].name + typeFile);
                    // Change the boolean layerMissing to true.
                    layerMissing = true;
                }
            }

            // If theres a layer missing, cancel it all and alert.
            if(layerMissing){
                return alert("Missing layer/s: \n" + layerArr.join() + ".");
            }

            // We then make a folder in the project.
            var newFolderName = app.project.items.addFolder(compName + " layers");

            // We then make a Comp in the project where all the layers will be.
            var newCompName = app.project.items.addComp(compName, parseInt(compWidth), parseInt(compHeight), 1, parseInt(compDuration), parseInt(compFrameRate));
            newCompName.openInViewer();

            // Loop through the Project panel.
            for(var i = 0; i < parsedData.slots.length; i++){
                // Importing the EPS layers into a temp var.
                // So that I can test if it exists where it says it does.
                tempFile = new File(pathTo + osBrackets + parsedData.slots[i].name + typeFile);
                app.project.importFile(new ImportOptions(tempFile));

                // Because they are selected when imported in the Project panel we use the selection to do the next parts.
                app.project.selection[0].parentFolder = newFolderName;
                // So we use it (the selection) to add it to the new comp.
                newCompName.layers.add(app.project.selection[0]);
                // Then we deselect them to move on to the next one.
                app.project.selection[0].selected = false;
            }

            // We looped in reverse but looking at it now it doesnt make a difference. I had an idea, it failed. I'll change it soon
            for(var j = 1; j <= newCompName.numLayers; j++){
                // Assign values to the X and Y variables using the loop value, USES NAME.
                // Looking at the values in the JSON file using bracket notation.
                bgX = parsedData.skins.default[newCompName.layer(j).name.replace(typeFile,'')][newCompName.layer(j).name.replace(typeFile,'')].x;
                // The Y is mirrored for some reason, I think spine Y must be from 0 to -1080 which makes sense, USES NAME
                bgY = parsedData.skins.default[newCompName.layer(j).name.replace(typeFile,'')][newCompName.layer(j).name.replace(typeFile,'')].y * -1 + parseInt(compHeight);
                // Finally set the values, USES NAME
                newCompName.layer(newCompName.layer(j).name).property("ADBE Transform Group").property("ADBE Position").setValue([bgX,bgY]);
            }

            for(var l = 1; l <= newCompName.numLayers; l++){
                // USING INDEX and changing names
                newCompName.layer(l).name = newCompName.layer(l).name.replace(typeFile,'');
            }
        }
    }

    // A little help to check for operating system, by NTProductions on youtube
    function osCheck() {
        var os = $.os;
        var match = os.indexOf("Windows");

        if(match != (-1)) {
            var userOS = "PC";
        } else {
            var userOS = "MAC";
        }
        return userOS;
    }

})();