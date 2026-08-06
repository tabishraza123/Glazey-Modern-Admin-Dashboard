import "./../../css/invoicing.css";

export default function InvoicePage() {

const invoices = [
{
id:"#INV-0001234",
client:"Nella Vita",
email:"vita@mail.com",
amount:"$650,036.34",
status:"Completed"
},
{
id:"#INV-0001235",
client:"Johnny Ahmad",
email:"ahmad@mail.com",
amount:"$650,036.34",
status:"Pending"
},
{
id:"#INV-0001236",
client:"Samantha Hu",
email:"sam@mail.com",
amount:"$650,036.34",
status:"Unpaid"
},
{
id:"#INV-0001237",
client:"Tony Sopp",
email:"tony@mail.com",
amount:"$650,036.34",
status:"Completed"
},
{
id:"#INV-0001238",
client:"Karen Hope",
email:"hope@mail.com",
amount:"$650,036.34",
status:"Completed"
}
];

return(

<div className="invoice-page">

<div className="invoice-top">

<h2>Invoice</h2>

<div className="invoice-actions">

<input
type="text"
placeholder="Search here..."
/>

<button>
New Invoice
</button>

</div>

</div>


<div className="invoice-cards">

<div className="card">

<h5>Invoice Completed</h5>

<h2>3,932</h2>

</div>

<div className="card">

<h5>Invoice Sent</h5>

<h2>1,234</h2>

</div>

<div className="card">

<h5>Invoice Unpaid</h5>

<h2>345</h2>

</div>

<div className="card">

<h5>Invoice Draft</h5>

<h2>932</h2>

</div>

</div>


<div className="invoice-table">

<table>

<thead>

<tr>

<th>ID Invoice</th>

<th>Client</th>

<th>Email</th>

<th>Amount</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{
invoices.map((item,index)=>(

<tr key={index}>

<td>{item.id}</td>

<td>{item.client}</td>

<td>{item.email}</td>

<td className="amount">
{item.amount}
</td>

<td>

<span className={item.status.toLowerCase()}>
{item.status}
</span>

</td>

<td>

<button className="more">
•••
</button>

</td>

</tr>

))
}

</tbody>

</table>

</div>

<div className="pagination">

<button>{"<"}</button>

<button className="active">1</button>

<button>2</button>

<button>3</button>

<button>{">"}</button>

</div>

</div>

)

}