$(function() {
    var numberTileSubmit        = $("#numberTileSubmit"),
        numberTileInput         = $("#numberTileInput"),
        output                  = $("#outputHTML"),
        resetSubmit             = $("#resetSubmit"),
        generateSubmit          = $("#generateSubmit"),
        question1               = $("#question1"),
        question2               = $("#question2"),
        category                = $(".subcategory-tile-menu"),
        expandSelection         = $("#expandSelection"),
        expandQuestionSubmit    = $("#ExpandQuestionSubmit");
        
    numberTileSubmit.on("click", function() {
        var numberOfTiles = numberTileInput.val();
        question1.hide();
        for (i = 0; i < numberOfTiles; i++) {
        var tileNumber = i + 1;
        var outputCode  = '<!--Tile Number : '+ tileNumber + ' Starts Here --!>\n';
            outputCode += ' <div class="catTile subcategory-tile-menu" selenium="expandTile" id="frontLoadBtn" style="background: rgb(239, 239, 239);">\n';
            outputCode += '     <img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/washing-machine.png" alt="Front Load Washers">\n';
            outputCode += '         <p class="txtLink">Front Load Washers</p>\n';
            outputCode += '         <div class="btnLinkWrapper">\n';
            outputCode += '         <p class="btnLink">SHOP NOW\n';
            outputCode += '             <span class="btnLinkIndicator" style="background: url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/up.png) 0px 11px no-repeat;"></span>\n';
            outputCode += '         </p>\n';
            outputCode += '     </div>\n';
            outputCode += ' </div>\n';
            outputCode += '<!--Tile Number : '+ tileNumber + ' Ends Here --!>\n';
            expandSelectionCode = '<div class="form-group"><span>Does Tile No : '+ tileNumber +' Expand?</span><label class="input-group-addon"><input type="radio" name="expand'+tileNumber+'" id="'+tileNumber+'Yes" value="YES"><h4>Yes</h4></label><label class="input-group-addon"><input type="radio" name="expand'+tileNumber+'" id="'+tileNumber+'No" value="NO"><h4>No</h4></label></div>'
        output.append(outputCode);
        expandSelection.append(expandSelectionCode);
        }
        question2.show();
    });

    generateSubmit.click(function(){
        console.log(output.html());
    });

    expandQuestionSubmit.on("click", function(){
//        $("#frontLoadBtn").children("p").text( "TITLE BRAHH" );
    });

})