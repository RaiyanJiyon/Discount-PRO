import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    return (
        <div className="bg-[#f8fafc] py-20">
            <h2 className="text-3xl text-[#E1713B] font-bold text-center">Frequently Asked Questions</h2>

            <div className='w-11/12 md:w-9/12 max-w-7xl mx-auto mt-10 space-y-4'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-xl'
                    >
                        What is a promo code?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm'>
                        A promo code is an alphanumeric phrase used during checkout to receive an online digital discount (or other benefit) on the purchase of e-commerce goods or services. It is used interchangeably with terms like coupon code, discount code, voucher code and sometimes is simply referred to as an online digital coupon. You can find promo codes for over 5,000 brands and learn more about couponing to maximize your savings by utilizing the educational resources on CouponFollow website.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        className='text-xl'
                    >
                        How can I get a discount or promo code every time I shop?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm'>
                        Remembering to search for a coupon isn&apos;t always easy and can be time consuming. We suggest you bookmark CouponFollow.com, or if you&apos;re using a desktop device with Chrome or Edge you can install the Gently coupon browser extension which automatically applies promo codes whenever you checkout. On average in 2021, Gently users have saved about $20 on their purchase whenever a discount is found.
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className='text-xl'
                    >
                        Do promo codes work?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm'>
                        Yes, but many only last for a very short period of time. Often retailers run promo code campaigns to incentivize shoppers and many use common coupon phrases throughout the year. In fact, data from our automatic coupon browser extension, Gently, finds that between 40% to 45% of the time a user receives a discount. This correlates with between every 2 to 3 shopping journeys a consumer has.
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;