import "./../../css/banking.css";

export default function BankingPage() {

const transactions=[
{
name:"Portu Studio",
amount:"$650,036.34",
date:"March 25, 2021"
},
{
name:"Akademi Studio",
amount:"$650,036.34",
date:"March 25, 2021"
},
{
name:"Nextrun Studio",
amount:"$650,036.34",
date:"March 25, 2021"
},
{
name:"Geex Studio",
amount:"$650,036.34",
date:"March 25, 2021"
},
{
name:"Klepon Studio",
amount:"$650,036.34",
date:"March 25, 2021"
}
];

return(

<div className="banking">

<div className="banking-header">

<h2>Banking</h2>

<input
type="text"
placeholder="Search here..."
/>

</div>


<div className="banking-grid">

<div className="balance-card">

<h3>Your Balance</h3>

<p>June 1, 2020, 08:22 AM</p>

<h1>$23,741.00</h1>

<span className="profit">+15%</span>

<div className="chart">

<div className="bar h1"></div>
<div className="bar h2"></div>
<div className="bar h3"></div>
<div className="bar h4"></div>
<div className="bar h5"></div>
<div className="bar h6"></div>
<div className="bar h7"></div>

</div>

<div className="income-box">

<div className="income">

<h4>Income</h4>

<strong>$23,741.00</strong>

</div>

<div className="income">

<h4>Outcome</h4>

<strong>$23,741.00</strong>

</div>

</div>

</div>


<div className="card-box">

<div className="bank-card">

<h3>1234 5678 9012 3456</h3>

<p>Nella Vita</p>

</div>

<div className="payment">

<h3>Quick Payment</h3>

<div className="pay-item">
<span>Nadia Adja</span>
<strong>$12,568.60</strong>
</div>

<div className="pay-item">
<span>Nadia Adja</span>
<strong>$12,568.60</strong>
</div>

<button>
New Transfer
</button>

</div>

</div>

</div>


<div className="transaction-card">

<div className="title">

<h3>Latest Transaction</h3>

</div>

<table>

<thead>

<tr>

<th>Name</th>

<th>Amount</th>

<th>Date</th>

<th></th>

</tr>

</thead>

<tbody>

{
transactions.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>

<td>{item.amount}</td>

<td>{item.date}</td>

<td>•••</td>

</tr>

))
}

</tbody>

</table>

</div>

</div>

);

}