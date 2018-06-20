document.addEventListener("DOMContentLoaded", function () {
	var myNews = new XMLHttpRequest();
	myNews.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=9db1e171b3f84d8784c9a1ae53904619', false);
	myNews.send();
	if(myNews.status !=200){
		alert( myNews.status + ': ' + myNews.statusText );
	}else {
		// alert( myNews.responseText );
		var response = JSON.parse( myNews.responseText);
		// console.log(response);
		var artics = response.articles;
		var newsBody = document.querySelector('.container');
		console.log(artics);
		for (var i = 0; i < artics.length; i++) {
			var newsDiv = document.createElement('div');
			newsDiv.className = "news_div";
			newsBody.appendChild(newsDiv);

			var articTitle = artics[i].title;
			var articDescription = artics[i].description;
			var articLink = 'More...';
			var articUrl = artics[i].url;
			var imgUrl = artics[i].urlToImage;

			var newImage = document.createElement('img');
			newImage.className = "news_img";
			newImage.src = imgUrl;
			newsDiv.appendChild(newImage);

			var newTitle = document.createElement('a');
			newTitle.innerHTML = articTitle;
			newTitle.className = "news_header";
			newTitle.href = articUrl;
			newsDiv.appendChild(newTitle);


			

			var newDesc = document.createElement('span');
			newDesc.innerHTML = articDescription;
			newDesc.className = "news_desc";
			newsDiv.appendChild(newDesc);
			var newLink = document.createElement('a');
			newLink.innerHTML = articLink;
			newLink.className = "more_link";
			newLink.href = articUrl;
			newsDiv.appendChild(newLink);
		}
	}
});