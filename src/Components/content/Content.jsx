import './content.css'
const Content = () => {
  return (
    <div className="grid grid-cols-3 gap-2 h-screen banner">
      <div>
      <img className="h-12 w-12 coin" src="/public/coin.svg" alt="" />
      </div>
      <div>
      <img className="h-24 w-24 opacity-50 graph" src="/public/reshot-icon-coin-graph-SRV39AMGC4.svg" alt="" />
      </div>
     <div>
     <img className="h-12 w-12 opacity-50 profit" src="/public/reshot-illustration-data-analytics-8W6NTYSUVB.png" alt="" />
     </div>
    </div>
  );
};

export default Content;