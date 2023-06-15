import { Button } from 'primereact/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../App.module.css';

const Faqs = () => {
    const data = [
        {
            title: 'Do I need to provide income verification for a conventional loan?',
            text: 'Yes, income verification is typically required for conventional loans. However, we have some loan options that may not require traditional income documentation.'
        },
        {
            title: 'What documents are typically needed for income verification?',
            text: "Commonly requested documents include pay stubs, W-2 forms, tax returns, and bank statements to verify your income stability."
        },
        {
            title: 'Can I use a rental income loan to finance a vacation home?',
            text: 'No, owner-occupied properties are not eligible for rental income loans, which are reserved for properties used as investments. You must apply for a conventional mortgage if you intend to use the property as your main residence.'
        },
        {
            title: 'Can I get a loan without providing income verification?',
            text: "Yes, Oqvest offers no-income loan options that allow borrowers to qualify based on the property's cash flow or rental income potential, without traditional income verification."
        },
        {
            title: 'Can I close in LLC?',
            text: 'Yes, we have loan options available for those who want to close in LLC. Contact us now to get started.'
        },
    ]
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleItem = (index) => {
        if (expandedItems.includes(index)) {
            setExpandedItems(expandedItems.filter((i) => i !== index));
        } else {
            setExpandedItems([...expandedItems, index]);
        }
    };

    return (
        <div>
            {data.map((item, index) => (
                <div
                    key={index}
                    className={styles.faqItem}
                >
                    <div
                        className={`${styles.ic} flex align-items-center gap-3 cursor-pointer pt-2 pb-4`}
                        onClick={() => toggleItem(index)}
                    >
                        <span style={{ fontWeight: '600', color: '#0CBC8B' }}>{expandedItems.includes(index) ? '-' : '+'}</span>
                        <h3 className="m-0">{item.title}</h3>
                    </div>
                    {expandedItems.includes(index) && (
                        <div className={styles.itemText}>
                            <p>{item.text}</p>
                        </div>
                    )}
                </div>
            ))}
            <div className="text-center my-8">
                <Link style={{textDecoration: 'none'}} to="lead">
                    <Button label="Paperless & Quick - Apply Now!" />
                </Link>
            </div>
        </div>
    );
};

export default Faqs;
