function elementToString(e){return serializer.serializeToString(e)}allElements=[];layer1SpecialTags=[];layer1=[];layer2=[];layer3=[];layer4=[];layer5=[];layer6=[];layer7=[];layer8=[];layer9=[];layer10=[];parents={};significantParents={};body=document.body;bodyDimensions=body.getBoundingClientRect();bodyWith=bodyDimensions.width;bodyHeight=bodyDimensions.height;serializer=new XMLSerializer;var meta=document.createElement('meta');meta.name='viewport';meta.content='width=device-width, initial-scale=1.0';document.getElementsByTagName('head')[0].appendChild(meta);findEveryElement=function(e){try{var t=findChildren(e);if(t.length!==0){for(var n in t){if(t[n]!=undefined){allElements.push(t[n]['element']);findEveryElement(t[n]['element'])}}}}catch(r){console.log(r)}};getLayer1=function(e){var t=elementToString(e);significantParents[t]=[];var n=e.getBoundingClientRect();var r=findChildren(e);if(r.length>0){for(var i in r){if(r[i]['element'].getBoundingClientRect()!=undefined){var s=r[i]['element'].getBoundingClientRect();if(s.width===0||s.height===0){getLayer1(r[i]['element'])}else if(s.width<6&&s.height<6){getLayer1(r[i]['element'])}else if(s.width<n.width||s.height<n.height){layer1.push(r[i]['element']);significantParents[t].push(r[i]['element']);getLayer2(r[i]['element'])}else{getLayer1(r[i]['element'])}}else{continue}}}};getLayer2=function(e){stringElement=e.toString();significantParents[stringElement]=[];var t=e.getBoundingClientRect();var n=findChildren(e);if(n.length>0){for(var r in n){if(n[r]['element'].getBoundingClientRect()!=undefined){var i=n[r]['element'].getBoundingClientRect();if(i.width===0||i.height===0){continue}else if(i.width<t.width||i.height<t.height){layer2.push(n[r]['element']);significantParents[stringElement].push(n[r]['element']);getLayer3(n[r]['element'])}else{getLayer2(n[r]['element'])}}else{continue}}}};getLayer3=function(e){var t=e.getBoundingClientRect();var n=findChildren(e);significantParents[stringElement]=[];if(n.length>0){for(var r in n){if(n[r]['element'].getBoundingClientRect()!=undefined){var i=n[r]['element'].getBoundingClientRect();if(i.width===0||i.height===0){continue}else if(i.width<t.width||i.height<t.height){layer3.push(n[r]['element']);significantParents[stringElement].push(n[r]['element']);getLayer4(n[r]['element'])}else{getLayer3(n[r]['element'])}}else{continue}}}};getLayer4=function(e){var t=e.getBoundingClientRect();var n=findChildren(e);significantParents[stringElement]=[];if(n.length>0){for(var r in n){if(n[r]['element'].getBoundingClientRect()!=undefined){var i=n[r]['element'].getBoundingClientRect();if(i.width===0||i.height===0){continue}else if(i.width<t.width||i.height<t.height){layer4.push(n[r]['element']);significantParents[stringElement].push(n[r]['element']);getLayer5(n[r]['element'])}else{getLayer4(n[r]['element'])}}else{continue}}}};getLayer5=function(e){var t=e.getBoundingClientRect();var n=findChildren(e);significantParents[stringElement]=[];if(n.length>0){for(var r in n){if(n[r]['element'].getBoundingClientRect()!=undefined){var i=n[r]['element'].getBoundingClientRect();if(i.width===0||i.height===0){continue}else if(i.width<t.width||i.height<t.height){layer5.push(n[r]['element']);significantParents[stringElement].push(n[r]['element']);getLayer6(n[r]['element'])}else{getLayer5(n[r]['element'])}}else{continue}}}};getLayer6=function(e){var t=e.getBoundingClientRect();var n=findChildren(e);significantParents[stringElement]=[];if(n.length>0){for(var r in n){if(n[r]['element'].getBoundingClientRect()!=undefined){var i=n[r]['element'].getBoundingClientRect();if(i.width===0||i.height===0){continue}else if(i.width<t.width||i.height<t.height){layer6.push(n[r]['element']);significantParents[stringElement].push(n[r]['element']);getLayer7(n[r]['element'])}else{getLayer6(n[r]['element'])}}else{continue}}}};getLayer7=function(e){var t=e.getBoundingClientRect();var n=findChildren(e);significantParents[stringElement]=[];if(n.length>0){for(var r in n){if(n[r]['element'].getBoundingClientRect()!=undefined){var i=n[r]['element'].getBoundingClientRect();if(i.width===0||i.height===0){continue}else if(i.width<t.width||i.height<t.height){layer7.push(n[r]['element']);significantParents[stringElement].push(n[r]['element']);getLayer8(n[r]['element'])}else{getLayer7(n[r]['element'])}}else{continue}}}};getLayer8=function(e){var t=e.getBoundingClientRect();var n=findChildren(e);significantParents[stringElement]=[];if(n.length>0){for(var r in n){if(n[r]['element'].getBoundingClientRect()!=undefined){var i=n[r]['element'].getBoundingClientRect();if(i.width===0||i.height===0){continue}else if(i.width<t.width||i.height<t.height){layer8.push(n[r]['element']);significantParents[stringElement].push(n[r]['element']);getLayer9(n[r]['element'])}else{getLayer8(n[r]['element'])}}else{continue}}}};getLayer9=function(e){var t=e.getBoundingClientRect();var n=findChildren(e);if(n.length>0){for(var r in n){if(n[r]['element'].getBoundingClientRect()!=undefined){var i=n[r]['element'].getBoundingClientRect();if(i.width===0||i.height===0){continue}else if(i.width<t.width||i.height<t.height){layer9.push(n[r]['element']);getLayer10(n[r]['element'])}else{getLayer9(n[r]['element'])}}else{continue}}}};getLayer10=function(e){var t=e.getBoundingClientRect();var n=findChildren(e);if(n.length>0){for(var r in n){if(n[r]['element'].getBoundingClientRect()!=undefined){var i=n[r]['element'].getBoundingClientRect();if(i.width===0||i.height===0){continue}else if(i.width<t.width||i.height<t.height){layer10.push(n[r]['element'])}else{getLayer10(n[r]['element'])}}else{continue}}}};findChildren=function(e){var t=e.children;var n=[];if(t.length!=undefined){for(i in t){if(t[i].tagName!=''&&t[i].tagName!='SCRIPT'&&t[i]!=undefined&&t[i].tagName!=undefined&&t[i].tagName!='OBJECT'){childObject={};childObject['element']=t[i];childObject['tag']=t[i].tagName;if(t[i].id!=''&&t[i].id!=undefined){childObject['id']=t[i].id}if(t[i].className!=''&&t[i].className!=undefined){childObject['classes']=t[i].className}n.push(childObject)}}return n}else{return[]}};removeStyle=function(e,t){if(e.style.removeProperty){e.style.removeProperty(t)}else{e.style.removeAttribute(t)}};removeAttr=function(e,t){e.removeAttribute(t)};removeStyling=function(e,t){removeStyle(e,t);removeAttr(e,t)};getStyleValue=function(e,t){var n=window.getComputedStyle(e);if(n.getPropertyValue(t)!==null){if(n.getPropertyValue(t).substring(-2)==='px'){return n.getPropertyValue(t).substring(0,-2)}else{return n.getPropertyValue(t)}}else{return null}};initStyling=function(){removeStyling(body,'margin');body.style.margin='0';removeStyling(body,'minWidth');body.style.minWidth='0';removeStyling(body,'width');body.style.width='100%'};layer1Styling=function(e){e.style.margin='0';e.style.padding='0';e.style.float='left';e.style.width='100%';if(getStyleValue(e,'position')==='fixed'){e.style.position='relative'}};layer2Styling=function(e){var t=e.getBoundingClientRect();var n=e.parentNode.getBoundingClientRect();if(t.width>n.width*.75){e.style.width='100%'}};layer3Styling=function(e){var t=e.getBoundingClientRect();var n=e.parentNode.getBoundingClientRect();if(t.width>n.width*.75){e.style.width='100%'}};layer3Styling=function(e){var t=e.getBoundingClientRect();var n=e.parentNode.getBoundingClientRect();if(t.width>n.width*.75){e.style.width='100%'}};layer4Styling=function(e){var t=e.getBoundingClientRect();var n=e.parentNode.getBoundingClientRect();if(t.width>n.width*.75){e.style.width='100%'}};layer5Styling=function(e){var t=e.getBoundingClientRect();var n=e.parentNode.getBoundingClientRect();if(t.width>n.width*.75){e.style.width='100%'}};layer6Styling=function(e){var t=e.getBoundingClientRect();var n=e.parentNode.getBoundingClientRect();if(t.width>n.width*.75){e.style.width='100%'}};layer7Styling=function(e){var t=e.getBoundingClientRect();var n=e.parentNode.getBoundingClientRect();if(t.width>n.width*.75){e.style.width='100%'}};layer8Styling=function(e){var t=e.getBoundingClientRect();var n=e.parentNode.getBoundingClientRect();if(t.width>n.width*.75){e.style.width='100%'}};layer9Styling=function(e){var t=e.getBoundingClientRect();var n=e.parentNode.getBoundingClientRect();if(t.width>n.width*.75){e.style.width='100%'}};layer10Styling=function(e){var t=e.getBoundingClientRect();var n=e.parentNode.getBoundingClientRect();if(t.width>n.width*.75){e.style.width='100%'}};uselessWrapperStyling=function(e){removeStyling(e,'width');e.style.width='100%'};allStyling=function(e){var t=e.getBoundingClientRect();if(t.width>=bodyDimensions.width*.75){removeStyling(e,'width');e.style.width='100%'}};imageStyling=function(e){var t=e.getBoundingClientRect();if(t.width>=bodyWith*.8){removeStyling(e,'width');e.style.width='100%';removeStyling(e,'display');e.style.display='block';removeStyling(e,'textAlign');e.style.textAlign='center';removeStyling(e,'marginLeft');e.style.marginLeft='auto';removeStyling(e,'marginRight');e.style.marginRight='auto'}else if(t.width>=bodyWith*.5){removeStyling(e,'display');e.style.display='block';removeStyling(e,'textAlign');e.style.textAlign='center';removeStyling(e,'marginLeft');e.style.marginLeft='auto';removeStyling(e,'marginRight');e.style.marginRight='auto'}};linkStyling=function(e){var t=e.getBoundingClientRect()};listStyling=function(e){var t=e.getBoundingClientRect()};totalClickableItems=0;findTotalClickable=function(e){var t=findChildren(e);if(t.length>0){for(i in t){if(t[i]['tag']==='A'){totalClickableItems=totalClickableItems+1}findTotalClickable(t[i]['element'])}}};findTotalClickable(document.body);executeStyling=function(){for(var e in allElements){if(allElements[e].style!==undefined){try{var t=allElements[e].getBoundingClientRect();removeStyling(allElements[e],'left');allElements[e].style.float='left';removeStyling(allElements[e],'position');allElements[e].style.position='relative';removeStyling(allElements[e],'padding');allElements[e].style.padding='0';removeStyling(allElements[e],'margin');allElements[e].style.margin='0 auto';removeStyling(allElements[e],'top');allElements[e].style.top='0';removeStyling(allElements[e],'left');allElements[e].style.left='0';removeStyling(allElements[e],'textAlign');allElements[e].style.textAlign='center';removeStyling(allElements[e],'minWidth');allElements[e].style.minWidth='0';removeStyling(allElements[e],'maxWidth');allElements[e].style.maxWidth='none';if(allElements[e].tagName!=='IMG'&&getStyleValue(allElements[e],'background-image')==='none'&&allElements[e].tagName!=='TR'&&allElements[e].tagName!=='BUTTON'){removeStyling(allElements[e],'width');allElements[e].style.width='100%'}else if(allElements[e].tagName==='BUTTON'){if(t.width>n.width*.75){allElements[e].width='100%'}}else if(allElements[e].tagName==='IMG'){imageStyling(allElements[e])}else if(allElements[e].tagName==='TR'){var n=allElements[e].parentNode.getBoundingClientRect();if(t.height>n*8){allElements[e].width='100%'}}if(allElements[e].tagName==='LI'){}}catch(r){console.log('err : '+r);console.log('element : '+allElements[e].tagName)}}}for(var e in layer1){layer1Styling(layer1[e])}for(var e in layer2){layer2Styling(layer2[e])}for(var e in layer3){layer3Styling(layer3[e])}for(var e in layer4){layer4Styling(layer4[e])}for(var e in layer5){layer5Styling(layer5[e])}for(var e in layer6){layer6Styling(layer6[e])}for(var e in layer7){layer7Styling(layer7[e])}for(var e in layer8){layer8Styling(layer8[e])}for(var e in layer9){layer9Styling(layer9[e])}for(var e in layer10){layer10Styling(layer10[e])}};initStyling();findEveryElement(body);getLayer1(body);executeStyling()