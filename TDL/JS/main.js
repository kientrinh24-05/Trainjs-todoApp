var listItems = [
	{
		email:"Thiên an",
		descreption:"Thiên an",
		author:"Thiên an",
	},

	{
		email:"Thiên an1",
		descreption:"Thiên an1",
		author:"Thiên an1",
	},
	{
		email:"Thiên an2",
		descreption:"Thiên an2",
		author:"Thiên an2",
	},
];

var Email;
var Descreption;
var Author;

var tableBody = document.querySelector('.tableBody');

const showData = (data) => {
	console.log(data ,'data');
	var listTxt = '';
	for (let i = 0; i < listItems.length; i++) {
		listTxt +='<tr>' + '<td>' + (i + 1) + '</td>' 
		+'<td>' + listItems[i].email + '</td>'
		+'<td>' + listItems[i].descreption + '</td>' 
		+'<td>' + listItems[i].author + '</td>' 
		+'<td> <i class="fa fa-pencil" aria-hidden="true"></i>'+'</td>' 
		+'<td> <i class="fa fa-trash" aria-hidden="true"></i>'+'</td>' 
		'</tr>'
	}
	tableBody.innerHTML = listTxt;
}

const addData = () => {
	Email = document.querySelector('#mail').value;
	Descreption = document.querySelector('#des').value;
	Author = document.querySelector('#author').value;

	var result = {
		email: Email,
		descreption: Descreption,
		author: Author,
	};

	// Thêm cái result vào trong mảng
	listItems.push(result);
	document.querySelector('.loading').classList.add('loadingActive');

	setTimeout(() => {
		document.querySelector('#mail').value = '';
		document.querySelector('#des').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('.modal-form').classList.remove('activeModal');
		document.querySelector('.main-modal').classList.remove('showMainModal');
		document.querySelector('.overlay').classList.remove('classShowOver');
		document.querySelector('.loading').classList.remove('loadingActive');
	}, 1000);
	showData(listItems);
}


showData(listItems)





window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let btnScroll = document.querySelector('.btn-scroll');
	let rootElement = document.documentElement;

	if (scroll >= 10) {
		btnScroll.classList.add('activeScroll')
	}else {
		btnScroll.classList.remove('activeScroll')
	}

	btnScroll.addEventListener('click' , () => {
		rootElement.scrollTo({
			top: 0,
			behavior: "smooth"
		  })
	})
});



const Modal = {
	init: function() {
		this.clickshowForm('.btn-add','.modal-form','activeModal','.overlay','classShowOver', '.main-modal' , 'showMainModal');
		this.clickcloseForm('#btn-cancel','.modal-form','activeModal','.overlay','classShowOver', '.main-modal' , 'showMainModal');
	},
	clickshowForm: function(btnAdd,formModal,classShowForm,overlay,classShowOver,formAdd ,showClassFormAdd){
		let buttonAdd = document.querySelector(btnAdd);
		let modalForm = document.querySelector(formModal);
		let Overlay = document.querySelector(overlay);
		let mainForm = document.querySelector(formAdd);

		buttonAdd.addEventListener('click' , () => {
			modalForm.classList.add(classShowForm);
			Overlay.classList.add(classShowOver);
			mainForm.classList.add(showClassFormAdd);
		})
	},

	clickcloseForm: function(btnClose,formModal,classShowForm,overlay,classShowOver,formAdd ,showClassFormAdd){
		let buttonClose = document.querySelector(btnClose);
		let modalForm = document.querySelector(formModal);
		let Overlay = document.querySelector(overlay);
		let mainForm = document.querySelector(formAdd);

		buttonClose.addEventListener('click' , () => {
			modalForm.classList.remove(classShowForm);
			Overlay.classList.remove(classShowOver);
			mainForm.classList.remove(showClassFormAdd);
		})
	}
}

Modal.init();

