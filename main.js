const model = document.querySelector('.model');
const menuBtn = document.querySelector('.menu-btn');
const userOptions = document.querySelector('.user-options');
const userBtn = document.querySelector('.user-btn');

function openMenu() {
    document.querySelector('.model').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.model').classList.add('show');

}

function closeMenu() {
    document.querySelector('.model').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.model').classList.remove('show');

}

function openUserOptions() {
    if (userOptions.style.display === 'block') {
        userOptions.style.display = 'none';
    } else {
        userOptions.style.display = 'block';
    }
}




// verification code
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code-input");

    console.log(inputs);

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (/^\d$/.test(e.data)) { // يقبل الأرقام فقط
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            } else {
                input.value = ""; // يمنع الحروف والرموز
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !input.value && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});


// Show password logic

document.querySelectorAll(".toggle-password").forEach(button => {
    button.addEventListener("click", function () {
        const passwordInput = this.previousElementSibling;
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            this.textContent = "🙈";
        } else {
            passwordInput.type = "password";
            this.textContent = "👁️";
        }
    });
});


// account details logic
function toggleEdit() {
    const values = document.querySelectorAll('.detail-value');
    const editButton = document.querySelector('.button');
    const saveButton = document.querySelectorAll('.button')[1];

    values.forEach(value => {
        if (!value.classList.contains('password-field')) {
            value.contentEditable = value.contentEditable === 'false' ? 'true' : 'false';
            value.classList.toggle('editable');
        }
    });

    editButton.style.display = editButton.style.display === 'none' ? 'inline-block' : 'none';
    saveButton.style.display = saveButton.style.display === 'none' ? 'inline-block' : 'none';
}

function saveChanges() {
    // Here you would typically send the updated data to a server
    toggleEdit();
    alert('تم حفظ التغييرات بنجاح!');
}

function confirmDelete() {
    if (confirm('هل أنت متأكد من أنك تريد حذف حسابك؟ هذا الإجراء لا يمكن التراجع عنه.')) {
        // Here you would typically send a delete request to the server
        alert('تم حذف الحساب بنجاح');
        // Redirect to login page or home page
    }
}



// show terms description 
function toggleTerm(termElement) {
    let plusIcon = termElement.querySelector(".plus");
    let minusIcon = termElement.querySelector(".minus");
    let description = termElement.querySelector(".term-dec");
    let termHead = termElement.querySelector(".term-head");
    let term = termElement.querySelector(".term");

    if (description.style.display === "block") {
        description.style.display = "none";
        plusIcon.style.display = "flex";
        minusIcon.style.display = "none";
    } else {
        description.style.display = "block";
        plusIcon.style.display = "none";
        minusIcon.style.display = "flex";
        minusIcon.classList.add("minus-toggle");
    }

    if (minusIcon.style.display === "flex") {
        termHead.classList.add("term-head-toggle");
        term.classList.add("term-border");
        minusIcon.classList.add("minus-toggle");
    } else {
        termHead.classList.remove("term-head-toggle");
        term.classList.remove("term-border");
        minusIcon.classList.remove("minus-toggle");
    }
}



// إظهار النموذج المناسب بناءً على اختيار نوع الإعلان
document.addEventListener('DOMContentLoaded', function () {
    const adTypeRadios = document.querySelectorAll('input[name="adType"]');
    const realEstateForm = document.getElementById('realEstateForm');
    const jobForm = document.getElementById('jobForm');
    const carForm = document.getElementById('carForm');

    function hideAllForms() {
        realEstateForm.classList.remove('active');
        jobForm.classList.remove('active');
        carForm.classList.remove('active');
    }

    adTypeRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            hideAllForms();
            if (this.value === 'realEstate') {
                realEstateForm.classList.add('active');
            } else if (this.value === 'job') {
                jobForm.classList.add('active');
            } else if (this.value === 'car') {
                carForm.classList.add('active');
            }
        });
    });
});