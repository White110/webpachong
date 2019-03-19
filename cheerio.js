const http = require('http');
const fs = require('fs');
http.globalAgent = 'Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1';
http.get('http://news.ifeng.com/a/20180604/58565046_0.shtml',function(req,res){
	var html = '';
	req.on('data',function(data){
		html+=data;
	})
	req.on('end',function(){
     getTittle(html);
    })
})
	function getTittle(html){
		const cheerio = require('cheerio');
		const $ = cheerio.load(html,{decodeEntities:false})
		//console.log($('.nav'))
		$('.js_selection_area').each(function(index,item){
			console.log($(item).html());
		})
	}