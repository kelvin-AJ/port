/////// ** NOTES ** ////////
// ***master mobile UX*** //

/*
// REWIRE YOUR BRIN NOTES
Due to the major paradigm shift from 2011, Mobile Traffic moved up incedibly. Most users of the web use it with small mobile devices(smart phones and tablets mostly)

///// BUILD MOBILE FIRST /////
Advantages:
Provides best experience across many device
Address contrsints of mobile not only screensize but also bandwidth

REMEMBER: Start small and scale up. This makes you focus more on content and functionality. This make things a LOT more easier for me(The designer) and the user.


// IMPROVE MOBILE EXPERIENCE BY UNDERSTANDING USERS //

1. Be There
2. Be Useful
-- Don't make users hunt fro what they want. Provide what they came for as quickly as possible.
3. Be Quick
-- Get the users what they need as soon as possible[The less steps the user has to go through, the best]

** REACHABILITY MATTERS **
**    NETWORK MATTER    **
**     SPEED MATTERS    **
--Reduce images, If you do need to reduce images [SVG/ WEBFonts are recommended because they take less bandwiths]
--Optimize and Minify CSS and JS ==> Remove unessary tags, comments and data. Also, before deploying, minify code files to remove whitespace in code, While it's not such a big difference in size, if you look at the large number of users, the difference we make is far more.

// BETTER MOBILE EXPERIENCE WITH STRATEGIC MENU DESIGN  //


1. Location of the menu icon on moble should be at cloce reach to the thumb
2. Design of menu button should be intuitive. Apparently many people don't like hamburgers. Button should look like buttons and not just text

// BETTER MOBILE EXPERIENCE WITH MOBILE FRIENDLY FORMS  //

1. Larger input fields
2. Ditch the labels. Use placeholders instead and float labels so users don't forget what they are filling out.
3. Don't ask unnecessary questions. Less input fields.
If you do need more information. emply pagination. break down form into several sections. Don't forget to show the users their progress so they don't have to wonder how much stuff they have to fill.
4. Enable auto-complete
5. Show passwords by default. Allow users toggle view or not.
--Users forgetting passwords causes a lot of support cost
--for credit card information
6. When taking numbers, make sure the keyboard is the right one.
7. Use anchor tags for phone numbers so the user can make the call just by tapping.

REMEMBER: reduce cognitive load

// BETTER MOBILE Advertising EXPERIENCE  //

1. Before you advertise, research
2. Make ads small and simple
3. STOP USING POP UPS!

*/

/*
///////////////// ** NOTES ** /////////////////
///// ***** REMEMBERING USERS INFO ****** /////
GO TO STORY_EDITOR.HTML

*/

const documentBody = document.querySelector("body")
const toggleThemeBtn = document.querySelector(".theme-switch");

const toggleTheme = function(){
    const curTheme = window.localStorage.getItem('theme');

    if(curTheme == "dark-mode"){
        window.localStorage.setItem('theme', 'light-mode')
        documentBody.classList.remove(curTheme);
    }else{
        window.localStorage.setItem('theme', 'dark-mode')
        documentBody.classList.add("dark-mode")
    }
    
};
const activateTheme = function(){
    const curTheme = window.localStorage.getItem('theme');
    documentBody.classList.add(curTheme)
}

activateTheme()
toggleThemeBtn.addEventListener("click", toggleTheme);
