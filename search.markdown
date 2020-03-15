---
title: Search
layout: page
permalink: '/search/'
visible_in_header: true
---

<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" style="width: 50%; padding: 8px 6px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;" placeholder="search...">
<ul id="results-container" style="margin: 0;"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="https://unpkg.com/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<div style="height: 28px;"><span>{date}</span><span style="font-size: 15px; font-family: Arial;"> » </span><a href="{url}"><h4 style="display: inline-block; margin-right: 8px; font-size: 16px;">{title}</h4></a></div>',
  json: '/search.json'
})
</script>
