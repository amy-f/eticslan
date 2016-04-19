	
		//Varable for menu inflation
		var MENU_inflated = false;
		var menuItems = document.getElementsByClassName("navElement");
		var menuButton = document.getElementsByClassName("hamburgerMenuIcon");
			
		
		//toggle menu inflation
		function toggleInflateMenu()
		{		
			//deflate inflate menu
			for (var n=0, max=menuItems.length; n < max; n++) 
			{
				menuItems[n].classList.toggle('hamburgerExpended');
				menuButton[0].classList.toggle('hamburgerExpended');
			}
				
			//update flag
			if (MENU_inflated == false)
			{					
				MENU_inflated = true;
			}
			else
			{
				MENU_inflated = false;			
			}
        }
		
		
		//Deflate menu if window size change
		function widthChanged(mq)
		{
			if (mq.matches)
			{
				if (MENU_inflated == true)
				{
					toggleInflateMenu();
				}
			}
		}
		

		//setup media listener
		//found some help making this here
		//http://www.sitepoint.com/javascript-media-queries/
		var mq = window.matchMedia("(min-width: 800px)");
		mq.addListener(widthChanged);
		widthChanged(mq);
	