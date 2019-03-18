const moduleName = "typewriter";

/*
* @desription This is the initalization function of the module.
* @param The opts object to setup the typewriter.
*/
function typewriter (opts) {
    
    //Error checking.
    if(!opts) {
       console.log("Opts need to be provided to " + moduleName + ".");
    } else if (!opts.selector) {
        console.log("A selector needs to be provided to " + moduleName + ".");
    } else if (!opts.string) {
        console.log("A string needs to be provided to " + moduleName + ".");
    }
    
    //Call writeString to start the process.
    writeString(opts)
    
}   

/*
* @description This function writes the string on the opts object to the selector on the opts object.
* @params opts contains the string that is to be written and the jquery selector of the html element where the string
*  is to be written to.
*/

function writeString (opts) {
    
    //Limting how many times it can happen.
    if(opts.time < 60000) {
        
        //For every characer in the string.
        for (let char of opts.string) {
            
            //Call a timeout function.
            setTimeout(function() {
                
                //Calling type with the character, the selector, and appened bc want to append the character to the element.
                type({
                    type : char
                    , selector : opts.selector
                    , append : "append"
                });
            }, opts.time);
        
            //Increment the time variable.
            opts.time = opts.time + 75;
        }
        
        //Call eraseString passing the opts object.
        eraseString(opts);
    
    }    
    
}

/*
* @description This function 'erases' the string from the selector. It really writes the string with 1 less character each time.
* @params opts This contains the selector and the string that is to be written.
*/

function eraseString (opts) {
    
    
    //Limiting how many times it happens.
    if(opts.time < 60000) {
    
        //Tradional for loop setting i to the length of the string and decremnting i.
        for (let i = opts.string.length; i>=0; i--) {
            
            //Call a time out function with opts.time to ensure this happens after the string has been written.
            setTimeout(function() {
                
                /* 
                * Call type with the string from 0 to i. This way a character is removed each time.
                * Calling type with the option of html so that it clears what is written there before writing the new content.
                */
                type({
                    type : opts.string.slice(0, i)
                    , selector : opts.selector
                    , html : "html"
                });
            }, opts.time);
                    
            //Increment the time.    
            opts.time = opts.time + 30;    
        }
        
        //Call write string passing in opts.
        writeString(opts);
        
    }  
    
}


/*
* @description This function writes the character or string to the selector. It can either be appened or set the html.
* @params opts This object contains the selector and what is to be typed.
*/
function type (opts) {
    if(opts.append) {
        $(opts.selector).append(opts.type);
    } else if (opts.html) {
        $(opts.selector).html(opts.type);
    }
       
}
