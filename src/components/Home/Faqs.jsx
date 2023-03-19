const Faqs = ()=> {
    const data = [
        {
            title: 'How can I obtain the lowest possible rates for a DSCR loan?',
            text: 'The rates for DSCR loans are typically determined by factors such as your credit score, income, and debt-to-income ratio. However, we have access to a wide network of lenders and can help you compare rates to find the most competitive deal.'
        },
        {
            title: 'How can I obtain the lowest possible rates for a DSCR loan?',
            text: 'The rates for DSCR loans are typically determined by factors such as your credit score, income, and debt-to-income ratio. However, we have access to a wide network of lenders and can help you compare rates to find the most competitive deal.'
        },
        {
            title: 'How can I obtain the lowest possible rates for a DSCR loan?',
            text: 'The rates for DSCR loans are typically determined by factors such as your credit score, income, and debt-to-income ratio. However, we have access to a wide network of lenders and can help you compare rates to find the most competitive deal.'
        },
        {
            title: 'How can I obtain the lowest possible rates for a DSCR loan?',
            text: 'The rates for DSCR loans are typically determined by factors such as your credit score, income, and debt-to-income ratio. However, we have access to a wide network of lenders and can help you compare rates to find the most competitive deal.'
        },
        {
            title: 'How can I obtain the lowest possible rates for a DSCR loan?',
            text: 'The rates for DSCR loans are typically determined by factors such as your credit score, income, and debt-to-income ratio. However, we have access to a wide network of lenders and can help you compare rates to find the most competitive deal.'
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