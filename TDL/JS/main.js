// var listItems = [
// 	{
// 		Email:"Thiên an",
// 		Descreption:"Thiên an",
// 		Author:"Thiên an",
// 	},
// ];


var listItems = JSON.parse(localStorage.getItem("table")) ?? [];







var Email;
var Descreption;
var Author;

var ItemidTmp;
var editMode = false;

const enableEditMode = () => {
	editMode = true;
}
const disableEditMode = () => {
	editMode = false;
}


var tableBody = document.querySelector('.tableBody');

const showData = (data) => {
	console.log(data ,'data');
	var listTxt = '';
	for (let i = 0; i < listItems.length; i++) {
		listTxt +='<tr>' + '<td>' + (i + 1) + '</td>' 
		+'<td>' + listItems[i].Email + '</td>'
		+'<td>' + listItems[i].Descreption + '</td>' 
		+'<td>' + listItems[i].Author + '</td>' 
		+'<td> <i class="fa fa-pencil edit-icon" aria-hidden="true" onclick="editData('+ i +')"></i>'+'</td>' 
		+'<td> <i class="fa fa-trash" aria-hidden="true" onclick="deleteData('+ i +')"></i>'+'</td>' 
		'</tr>'
	}
	tableBody.innerHTML = listTxt;
}
const editItemHandle = () => {
		
	Email = document.querySelector('#mail').value;
	Descreption = document.querySelector('#des').value;
	Author = document.querySelector('#author').value;

	listItems[ItemidTmp] = {
		Email,
		Descreption,
		Author
	}
	document.querySelector('.loading').classList.add('loadingActive');
	localStorage.setItem("table" , JSON.stringify(listItems));

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
	console.log(listItems);
}


const addData = () => {
	if(editMode) {
		editItemHandle();
	} else {
		Email = document.querySelector('#mail').value;
		Descreption = document.querySelector('#des').value;
		Author = document.querySelector('#author').value;
	
		var result = {
			Email: Email,
			Descreption: Descreption,
			Author: Author,
		};
		// Thêm cái result vào trong mảng
		listItems.push(result);
		localStorage.setItem("table" , JSON.stringify(listItems));
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
		+
		showData(listItems);
	}
}

const deleteData = (id) => {
	console.log(id ,'id');
	alert("Bạn có muốn xóa" + id + "");
	listItems.splice(id,1);

	localStorage.setItem("table" , JSON.stringify(listItems));

	showData(listItems)
}

const editData = (id) => {
	ItemidTmp = id;

	var listIndex = getItem(id);

	setInputValue('#mail' , listIndex.Email);
	setInputValue('#des' , listIndex.Descreption);
	setInputValue('#author' , listIndex.Author);


	//	Ứng dụng hàm
	// var element1 = document.querySelector('#mail');
	// element1.value = listIndex.Email
	// var element2 = document.querySelector('#des');
	// element2.value = listIndex.Descreption
	// var element3 = document.querySelector('#author');
	// element3.value = listIndex.EmaAuthoril

	localStorage.setItem("table" , JSON.stringify(listItems));

	enableEditMode();
	setHtml('#btn-add',"Update");


	// viết tắt của hàm SetHTML
	// var element = document.querySelector('#btn-add');
	// element.innerHTML = "Update";

	const btnEdit = document.querySelectorAll('.edit-icon');
	const form = document.querySelector('.modal-form');
	const overlay = document.querySelector('.overlay');
	const mainModal = document.querySelector('.main-modal');



	btnEdit.forEach((item,index) => {
		item.addEventListener('click' , () => {
			form.classList.toggle('activeModal');
			overlay.classList.toggle('classShowOver');
			mainModal.classList.toggle('showMainModal');

		})
	})

	
}

const getItem = (id) => {
	return listItems[id]
}

const setInputValue = (selector,value) => {
	var element = document.querySelector(selector);
	element.value = value
}

const setHtml = (selector,html) => {
	var element = document.querySelector(selector);
	element.innerHTML = html;
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

