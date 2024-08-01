// let expenses = [];

// function addExpense() {
//     const expenseName = document.getElementById('expense-name').value;
//     const amount = parseFloat(document.getElementById('amount').value);
//     const category = document.getElementById('category').value;
//     const date = document.getElementById('date').value;

//     if (!expenseName || !amount || !category || !date) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     const expense = {
//         name: expenseName,
//         amount: amount,
//         category: category,
//         date: date
//     };

//     expenses.push(expense);
//     displayExpenses();
//     calculateTotal();
//     document.getElementById('expense-name').value = '';
//     document.getElementById('amount').value = '';
//     document.getElementById('category').value = 'Food';
//     document.getElementById('date').value = '';
// }

// function displayExpenses() {
//     const expenseList = document.getElementById('expense-list');
//     expenseList.innerHTML = '';

//     expenses.forEach((expense, index) => {
//         const row = document.createElement('tr');

//         row.innerHTML = `
//             <td>${expense.name}</td>
//             <td>$${expense.amount.toFixed(2)}</td>
//             <td>${expense.category}</td>
//             <td>${expense.date}</td>
//             <td>
//                 <button onclick="editExpense(${index})">Edit</button>
//                 <button onclick="deleteExpense(${index})">Delete</button>
//             </td>
//         `;

//         expenseList.appendChild(row);
//     });
// }

// function calculateTotal() {
//     const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
//     document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
// }

// function deleteExpense(index) {
//     expenses.splice(index, 1);
//     displayExpenses();
//     calculateTotal();
// }

// function editExpense(index) {
//     const expense = expenses[index];
//     document.getElementById('expense-name').value = expense.name;
//     document.getElementById('amount').value = expense.amount;
//     document.getElementById('category').value = expense.category;
//     document.getElementById('date').value = expense.date;
//     deleteExpense(index);
// }

// function filterExpenses() {
//     const filterCategory = document.getElementById('filter-category').value;
//     const filteredExpenses = filterCategory === 'All' ? expenses : expenses.filter(expense => expense.category === filterCategory);

//     const expenseList = document.getElementById('expense-list');
//     expenseList.innerHTML = '';

//     filteredExpenses.forEach((expense, index) => {
//         const row = document.createElement('tr');

//         row.innerHTML = `
//             <td>${expense.name}</td>
//             <td>$${expense.amount.toFixed(2)}</td>
//             <td>${expense.category}</td>
//             <td>${expense.date}</td>
//             <td>
//                 <button onclick="editExpense(${index})">Edit</button>
//                 <button onclick="deleteExpense(${index})">Delete</button>
//             </td>
//         `;

//         expenseList.appendChild(row);
//     });

//     const totalAmount = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
//     document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
// }

document.getElementById('add-expense-btn').addEventListener('click', addExpense);
document.getElementById('filter-category').addEventListener('change', filterExpenses);

let expenses = [];

function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const category = document.getElementById('expense-category').value;
    const date = document.getElementById('expense-date').value;

    if (name && amount && category && date) {
        const expense = { name, amount, category, date };
        expenses.push(expense);
        displayExpenses(expenses);
        updateTotal();
        clearForm();
    }
}

function displayExpenses(expensesToDisplay) {
    const table = document.getElementById('expense-table');
    table.innerHTML = '';
    expensesToDisplay.forEach((expense, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
            <td>
                <button onclick="editExpense(${index})">Edit</button>
                <button onclick="deleteExpense(${index})">Delete</button>
            </td>
        `;

        table.appendChild(row);
    });
}

function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('total-amount').innerText = `$${total.toFixed(2)}`;
}

function clearForm() {
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
    document.getElementById('expense-category').value = 'Food';
    document.getElementById('expense-date').value = '';
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses(expenses);
    updateTotal();
}

function editExpense(index) {
    const expense = expenses[index];
    document.getElementById('expense-name').value = expense.name;
    document.getElementById('expense-amount').value = expense.amount;
    document.getElementById('expense-category').value = expense.category;
    document.getElementById('expense-date').value = expense.date;

    deleteExpense(index);
}

function filterExpenses() {
    const category = document.getElementById('filter-category').value;
    if (category === 'All') {
        displayExpenses(expenses);
    } else {
        const filteredExpenses = expenses.filter(expense => expense.category === category);
        displayExpenses(filteredExpenses);
    }
}
