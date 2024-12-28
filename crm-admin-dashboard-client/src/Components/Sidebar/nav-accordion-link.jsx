import { FaBook, FaFileAlt, FaShoppingBag, FaShoppingBasket, FaUsers } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
export const navAccordionLink = () => {
    const customers = { 
        icon: <FaUsers/>, 
        title: 'Customers',
        items: [
            { link: '/add-customer', title: 'Add Customer' },
            { link: '/customer-list', title: 'List' },
            { link: '/group', title: 'Group' },
        ],
    };
    const transactions = { 
        icon: <FaShoppingBasket/>, 
        title: 'Transaction',
        items: [
            { link: '/deposit', title: 'New Deposit' },
            { link: '/expense', title: 'New Expense' },
            { link: '/transfer', title: 'Transfer' },
            { link: '/view-transaction', title: 'View Transaction' },
            { link: '/balance', title: 'Balance Sheet' },
            { link: '/transfer-report', title: 'Transfer Report' },
        ],
    };
    const sales = { 
        icon: <FaCartShopping/>, 
        title: 'Sales',
        items: [
            { link: '/invoice', title: 'Invoices' },
            { link: '/new-invoice', title: 'New Invoices' },
            { link: '/recurring', title: 'Recurring Invoices' },
            { link: '/new-recurring', title: 'New Recurring Invoices' },
            { link: '/quote', title: 'Quotes' },
            { link: '/new-quote', title: 'New Quotes' },
            { link: '/payment', title: 'Payments' },
            { link: '/tax-rate', title: 'Tax Rates' },
        ],
    };
    const tasks = {
        icon: <FaBook/>,
        title: 'Task',
        items: [
            { link: '/running-task', title: 'Running Task' },
            { link: '/archive-task', title: 'Archive Task' },
        ],
    };
    const accountings = {
        icon: <FaShoppingBag/>,
        title: 'Accounting',
        items: [
            { link: '/client-payment', title: 'Client Payment' },
            { link: '/expense-management', title: 'Expense Management' },
            { link: '/expense-category', title: 'Expense Category' },
        ],
    };
    const reports = {
        icon: <FaFileAlt/>,
        title: 'Report',
        items: [
            { link: '/project-report', title: 'Project Report' },
            { link: '/client-report', title: 'Client Report' },
            { link: '/expense-report', title: 'Expense Report' },
            { link: '/income-expense', title: 'Income Expense' },
        ],
    };
    return {
        customers,
        transactions,
        sales,
        tasks,
        accountings,
        reports,
    };
};