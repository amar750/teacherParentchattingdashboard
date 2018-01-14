(function($) {
			
			$.fn.custompaginate=function(options) {
				
				var paginationContainer=this;
				var itemsToPaginate;
				var default={
					itemPerPage=5;
				};

				var settings={};
				$.extend(settings,default,options);

				// paginationContainer=$(settings.paginationContainer);
				itemsToPaginate=$(settings.itemsToPaginate);

				var numberOfPagiantonLnks=Math.ceil((itemsToPaginate.length/settings.itemPerPage));

				$("<ul></ul>").prependTo(paginationContainer);

				for(var index=0;index<numberOfPagiantonLnks;index++)
				{
					paginationContainer.find("ul").prepend("<li>"+(index+1)+"</li>");
				}

			}



		$(".pagination").custompaginate({

			itemsToPaginate:".post"
		});
}(jQuery));