const Faqs = ()=> {
    const data = [
        {
            title: 'How can I obtain the lowest possible rates for a DSCR loan?',
            text: 'The rates for DSCR loans are typically determined by factors such as your credit score, income, and debt-to-income ratio. However, we have access to a wide network of lenders and can help you compare rates to find the most competitive deal.'
        },
        {
            title: ' How much can I borrow with a rental income loan?',
            text: "The net operating income (NOI) of the asset and the loan-to-value (LTV) ratio of the lender will determine how much you can borrow. The property's NOI must be enough to support the debt service for the loan, and lenders often lend up to 75-80% of the property's value or purchase price."
        },
        {
            title: ' Can I use a rental income loan to finance a vacation home?',
            text: 'No, owner-occupied properties are not eligible for rental income loans, which are reserved for properties used as investments. You must apply for a conventional mortgage if you intend to use the property as your main residence.'
        },
        {
            title: 'Do I need to have a certain credit score to qualify for a DSCR loan?',
            text: "DSCR loans are primarily focused on the property's revenue, therefore the credit score criteria may be more lenient than with standard mortgages, even though credit score is still taken into account when assessing loan eligibility."
        },
        {
            title: 'Do you provide consultation calls as well?',
            text: 'Yes, we offer free consultation calls with our loan officers that have a lot of DSCR loan procedure experience. They can offer you professional advise and direction on how to get the best loan for your rental property.'
        },
    ]
    return (
        <div>
            {
                data.map((data)=> (
                    <div className="faq-item">
                        <div className="flex align-items-center gap-3">
                            <span style={{marginTop: '-18px', fontWeight: '600'}}>_</span>
                            <h3 className="m-0">{data.title}</h3>
                        </div>
                        <div className="item-text">
                            <p>{data.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Faqs;