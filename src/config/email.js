const nodemailer = require("nodemailer");
const { console } = require("../helpers");

module.exports.sendEmail = (from=process.env.NODEMAILER_EMAIL, to, subject, body) => {

    const transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: process.env.NODEMAILER_PORT,
        secure: process.env.NODEMAILER_SECURE, // true for 465, false for other ports
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        },
        from,
        tls: {
            rejectUnauthorized: false
        }
    });
      
    const mailOptions = {
        // from: process.env.NODEMAILER_EMAIL,
        from,
        to,
        subject,
        html: body,
        priority: 'high'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console(error, 'email error');
			
        } else {
            console(info, 'email info');
			
        }
    });


    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // console.log('token: ', token);
    // const msg = {
    //     from: process.env.FROM,
    //     to: email,
    //     subject: 'Welcome to movie app community',
    //     html: `
    //         <p> Hello ${username} </p>

    //         <p> verify your account </p>

    //         <button> <a href="${process.env.APP_URL}${process.env.PORT}/verify?${token}"> Click here </a> </button>

    //     `
    // }

    // sgMail.send(msg);
}


module.exports.verificationTemplate = (username, token) => {
		const from= 'rongobuy.com <test@rongobuy.com>';
		const subject= 'Account Verification ';
		const body = `
				<p> Hello  ${username},</p>
	
				<p> verify your account for ${process.env.SITE_NAME || 'e-commerce shop'}</p>
	
				<button> <a href="${process.env.APP_URL}/users/verify/${token}"> Click here </a> </button>

				<p> regards ${process.env.APP_URL}</p>
			`;
		return {from, subject, body};
}