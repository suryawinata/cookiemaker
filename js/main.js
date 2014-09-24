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
        expandQuestionSubmit    = $("#ExpandQuestionSubmit"),
        expandSelectionCount    = $(".expandSelectionCount"),
        TitleAndImageSubmit     = $("#TitleAndImageSubmit"),
        numberOfTiles           = 0;


    numberTileSubmit.on("click", function() {
        numberOfTiles = numberTileInput.val();
        question1.hide();
        for (i = 0; i < numberOfTiles; i++) {
        var tileNumber = i + 1;
        var outputCode               = '<!--Tile Number : '+ tileNumber + ' Starts Here --!>\n';
            outputCode              += ' <div class="catTile subcategory-tile-menu" selenium="expandTile" id="frontLoadBtn" style="background: rgb(239, 239, 239);">\n';
            outputCode              += '     <a class="linkToFilter" selenium="checkLink" href="http://www.appliancesonline.com.au/twin-tub-washing-machines/" title="Twin Tub Washers">\n';
            outputCode              += '        <img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/washing-machine.png" alt="Front Load Washers">\n';
            outputCode              += '        <p class="txtLink">Front Load Washers</p>\n';
            outputCode              += '        <div class="btnLinkWrapper">\n';
            outputCode              += '            <p class="btnLink">SHOP NOW\n';
            outputCode              += '                <span class="btnLinkIndicator" style="background: url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/up.png) 0px 11px no-repeat;"></span>\n';
            outputCode              += '            </p>\n';
            outputCode              += '        </div>\n';
            outputCode              += '    </a>\n';
            outputCode              += ' </div>\n';
            outputCode              += '<!--Tile Number : '+ tileNumber + ' Ends Here --!>\n';
            expandSelectionCode      = '<div class="form-group questionPerTile expandSelectionCount'+tileNumber+'">\n';
            expandSelectionCode     += '<span>Does Tile No : '+ tileNumber +' Expand?</span>\n';
            expandSelectionCode     += '<label class="input-group-addon"><input type="radio" name="'+tileNumber+'expand" id="'+tileNumber+'Yes" value="YES"><h4>Yes</h4></label>\n';
            expandSelectionCode     += '<label class="input-group-addon"><input type="radio" name="'+tileNumber+'expand" id="'+tileNumber+'No" value="NO"><h4>No</h4></label>\n';
            expandSelectionCode     += '</div>\n';
        output.append(outputCode);
        expandSelection.append(expandSelectionCode);
        }
        question2.show();
    });

    generateSubmit.click(function(){
        console.log(output.html());
    });

    expandQuestionSubmit.on("click", function(){
        if($("input:radio:checked").size() == numberOfTiles ){
            for (i = 0; i < numberOfTiles; i++){
                var optionNumber = i + 1;
                var optionName = optionNumber+"expand";
                var optionCheck = "input:radio[name="+ optionName +"]:checked";
                var val = $(optionCheck).val();
                var NoQuestion;
                var submenuExpand;
                if (val !=="undefined"  ){
                    if (val == "NO"){
                        var tile = ".expandSelectionCount"+optionNumber;
                        $(tile).empty();
                        noQuestion  = '<!--Questions-Start--!>\n'
                        noQuestion += '<div class = "gimme-background">\n'
                        noQuestion += '<h4 class = "noExpand" id="tileNo'+ i +'">NO EXPAND</h4>\n'
                        noQuestion += '<span>What is tile No : '+ optionNumber +' title?</span>\n'
                        noQuestion += '<input type="text" class="form-control" id="titleNo" placeholder="Enter title name">\n'
                        noQuestion += '<span>Where is tile No : '+ optionNumber +' image?</span>\n'
                        noQuestion += '<input type="text" class="form-control" id="imageNo" placeholder="Enter image relative href eg. images/opt/slider/a.png">\n'
                        noQuestion += '<span>What is tile No : '+ optionNumber +' filter page link?</span>\n'
                        noQuestion += '<input type="text" class="form-control" id="linkNo" placeholder="Enter link relative href eg. /washing-machines/">\n'
                        noQuestion += '</div>\n'
                        noQuestion += '<!--Questions-Ends--!>\n'
                        $(".subcategory-tile-menu").eq(i).find("span").remove();
                        $(tile).append(noQuestion);
                    }
                    else if(val == "YES"){
                        var tile = ".expandSelectionCount"+optionNumber;
                        $(tile).empty();
                        noQuestion  = '<!--Questions-Start--!>\n'
                        noQuestion      += '<div class = "gimme-background">\n'
                        noQuestion      += '<h4 class = "yesExpand" id="tileNo'+ i +'">EXPAND</h4>\n'
                        noQuestion      += '<span>What is tile No : '+ optionNumber +' title?</span>\n'
                        noQuestion      += '<input type="text" class="form-control" id="titleYes" placeholder="Enter title name">\n'
                        noQuestion      += '<span>Where is tile No : '+ optionNumber +' image?</span>\n'
                        noQuestion      += '<input type="text" class="form-control" id="imageYes" placeholder="Enter image relative href eg. images/opt/slider/a.png">\n'
                        noQuestion      += '</div>\n'
                        noQuestion      += '<!--Questions-Ends--!>\n'
                        submenuExpand  = '<div class="submenu-expand" id="frontLoad"><span class="indicator"></span><div class="catTile subTile"><a selenium="checkLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx" title="Shop All Frontload Wahsers"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/all-front-load.png" class="subImg" alt="Shop All Frontload Wahsers"><p class="txtLink">All Front Load Washers</p><div class="btnLinkWrapper"><p class="btnLink">SHOP ALL</p></div></a></div><div class="catTile subTile popularFilterTile noBrdrRight-sm"><p class="txtLink">Shop by wash load</p><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/wash-load.png" class="subImg" alt="Shop by Wash Load"><div class="btnLinkWrapper desktopLinks"><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines/filter/-2135676775/" title="Shop by Wash Load 5-6kg">5-6KG</a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines/filter/1056163629/" title="Shop by Wash Load 7kg">7KG</a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines/filter/-1430348254/" title="Shop by Wash Load 8kg">8KG</a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines/filter/387619703/" title="Shop by Wash Load above 9kg">9KG+</a></div><div class="btnLinkWrapper mobLinks"><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx?f_426638=5.0kg&amp;f_426638=5.5kg" title="Shop by Wash Load 5-6kg">5-6KG</a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx?f_426638=7.0kg&amp;f_426638=7.5kg" title="Shop by Wash Load 7kg">7KG</a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx?f_426638=7.5kg&amp;f_426638=8.0kg&amp;f_426638=8.5kg" title="Shop by Wash Load 8kg">8KG</a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx?f_426638=8.5kg&amp;f_426638=9.0kg&amp;f_426638=10.0kg" title="Shop by Wash Load above 9kg">9KG+</a></div></div><div class="catTile subTile brandTile noBrdrRight-lg noBrdrBottom-lg"><p class="txtLink">Shop by brand</p><div class="btnLinkWrapper desktopLinks"><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines/filter/1128644395/" title="Samsung"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/samsung.png" alt="Samsung"></a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines/filter/1183352014/" title="LG"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/lg.png" alt="LG"></a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines/filter/-1845139223/" title="Bosch"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/bosch.png" alt="Bosch"></a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines/filter/-858392742/" title="Fisher &amp;Paykel"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/fisher-paykel.png" alt="Fisher &amp;Paykel"></a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines/filter/1484802583/" title="Euromaid"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/euromaid.png" alt="Euromaid"></a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines/filter/197130205/" title="Simpson"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/simpson.png" alt="Simpson"></a></div><div class="btnLinkWrapper mobLinks"><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx?f_brand=20" title="Samsung"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/samsung.png" alt="Samsung"></a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx?f_brand=12" title="LG"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/lg.png" alt="LG"></a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx?f_brand=3" title="Bosch"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/bosch.png" alt="Bosch"></a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx?f_brand=9" title="Fisher &amp;Paykel"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/fisher-paykel.png" alt="Fisher &amp;Paykel"></a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx?f_brand=52" title="Euromaid"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/euromaid.png" alt="Euromaid"></a><a selenium="checkLink" class="btnLink" href="http://www.appliancesonline.com.au/front-load-washing-machines.aspx?f_brand=28" title="Simpson"><img src="http://www.appliancesonline.com.au/images/opt/washing-v2/images/simpson.png" alt="Simpson"></a></div></div><div class="clear"></div></div>'
                        $(submenuExpand).insertAfter($(".subcategory-tile-menu").last());
                        $(".submenu-expand").hide();
                        $(tile).append(noQuestion);
                    }
                }
            }
            $("#ExpandQuestionSubmit").replaceWith('<button type="submit" class="btn btn-default" id="TitleAndImageSubmit">Next</button>');

        }
        else{
            alert("YOU DIDNT ANSWER ALL QUESTIONS");
        }
    });

    $(document).on('click', '#TitleAndImageSubmit', function() {
        $( "#question2 :input:text" ).each(function() {
            if( !$(this).val() ) {
                  $(this).addClass('warning');
            }
        });
        if($( "#question2 :input:text" ).hasClass('warning')){
            alert("YOU DIDNT ANSWER ALL QUESTIONS");
        }
        else{
            $(".questionPerTile").each(function(){
                var thisTile = $(this);
                if(thisTile.find('h4').hasClass("noExpand")){
                    var tilePos = thisTile.find('h4').attr('id').replace("tileNo", '');
                    var titleNo = thisTile.find("#titleNo").val();
                    var imageNo = thisTile.find("#imageNo").val();
                    var linkNo  = thisTile.find("#linkNo").val();
                    $(".subcategory-tile-menu").eq(tilePos).find("p.txtLink").text(titleNo);
                    $(".subcategory-tile-menu").eq(tilePos).find("p.txtLink").text(titleNo);
                    $(".subcategory-tile-menu").eq(tilePos).find("img").attr("src",imageNo);
                    $(".subcategory-tile-menu").eq(tilePos).find("a.linkToFilter").attr("href",linkNo);

                }
                else{
                    var tilePos = thisTile.find('h4').attr('id').replace("tileNo", '');
                    //remove the href
                }
            });
        }
    });
    $(document).on('click', '.form-control', function() {
        $(this).removeClass('warning');
    });
})