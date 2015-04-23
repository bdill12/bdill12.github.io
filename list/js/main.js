	$(function (){
		console.log('Initialized.');
	var tasks = [];
	var complete = [];
	var t = tasks.length;
	var why = document.getElementById("addSubmit");
	why.addEventListener('click', 'operations.additem()');

	var model = {
		tasks: function(){
			console.log('model.tasks done.');
			for (var t = 0; t <= localStorage.tasks.length; t++) {
			  tasks.push(localStorage.tasks[t]);
			}
		},
		addnew: function() {
			console.log('model.addnew done.');
			tasks.push(add.value);
			localStorage.setItem("tasks", tasks);
		},
		completed: function(remove) {
			console.log('model.completed done.');
			var end = remove + 1;
			complete.push(tasks.slice(remove, end));
			tasks.splice(remove);
		},
		createStorage: function() {
			console.log('Creating storage...');
			localStorage.setItem("tasks", []);
		}
	};

	var operations = {
		init: function() {
			console.log('looking for storage...');
			if(typeof(Storage) !== "undefined") {
				if (localStorage.tasks === undefined) {
					model.createStorage();
				}
				if (localStorage.tasks.length  >= 1) {
					console.log(localStorage.tasks.length + "found items");
					model.tasks();
					view.init();
				} else {
					console.log('No items found.');
					view.noitems();
				}
			} else {
				console.log('Browser insupportive');
				view.nosupport();
			}
		},
		additem: function() {
			console.log('Initializing add new...');
			model.addnew();	
			view.addnew();
		},
		completed: function(item){
			console.log('Initializing completed...');
			model.completed(item);
			view.completed();
		}
	};

	var view = {
		init: function(){
			console.log('Initializing view.init');
			for (var n = 0; n <= t; n++) {
				console.log('Adding tasks...');
				var completed = 'operations.completed(n)';
				$('.list1').append('<li><input onclick="'+completed+'" type="checkbox"><span class="task">'+tasks[n]+'</span></li>');
			}
			if (complete.length > 0) {
				console.log('Adding completed....');
				for (var x = 0; x <= complete.length; x++) {
					$('.list1').append('<li class="completed">'+complete[0]+'</li>');
				}
		}
	},
		noitems: function() {
			console.log('view.noitems done.');
			$('.list1').append('<li>Add something to your list...</li>');
		},
		nosupport: function() {
			console.log('view.nosupport done.');
			$ ('.list1').append('<li>Your browser does not support storage.</li>');
		},
		addnew: function() {
			console.log('view.addnew done');
			var lastitem = t - 1;
			var completedx = operations.completed(lastitem);
			$('.list1').append('<li><input onclick="'+completedx+'" type="checkbox><span class="task" id="listed'+t+'">'+tasks[lastitem]+'</span></li>');
		},
		completed: function() {
			console.log('view.completed done.');
			$('.list1').empty();
			this.init();
		}
	};

	operations.init();
});