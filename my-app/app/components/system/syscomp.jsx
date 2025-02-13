

export default function BusinessAccount() {
  return (
    <div className="w-full">
      <div className="w-max_width m-auto flex flex-col">
        <div className="grid grid-cols-5 px-5 pb-5 gap-5 border-b-2 border-gray-600">
          <div>
            <p>Business account</p>
          </div>
          <div>
            <p>Digital incorporation</p>
          </div>
          <div>
            <p>Invoice management</p>
          </div>
          <div>
            <p>Expense management</p>
          </div>
          <div>
            <p>Bookkeeping & cash flow</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 pt-10">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p>Business account</p>
              <p>The account that's powerful to the core. Day-to-day banking, from secure bank account to payment  cards & real-time transfers, all included in your plan.</p>
            </div>
            <div>
              <p>Discover the feature</p>
            </div>
          </div>
          <div>
            <img src="/iphone.png" alt="" />
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
