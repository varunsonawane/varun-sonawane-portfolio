# EmailJS Setup Guide for Your Portfolio

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Connect Your Gmail Account
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail**
4. Click **Connect Account** and authorize EmailJS to access your Gmail
5. Your service will be created with a **Service ID** (save this!)

## Step 3: Create an Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:** New Portfolio Contact: {{subject}}

**Content:**
```
Hello Varun,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent via your portfolio contact form
```

4. Save the template and note the **Template ID**

## Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (also called User ID)

## Step 5: Update Your Environment Variables
Replace the values in your `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test Your Contact Form
1. Save all files and restart your development server
2. Fill out your contact form
3. Check your Gmail inbox for the message
4. Check EmailJS dashboard for delivery status

## Important Notes:
- EmailJS free plan allows 200 emails per month
- Emails will be sent from EmailJS but appear to come from your Gmail
- Make sure to whitelist EmailJS in your Gmail settings if needed
- The contact form will now send real emails to vsonawa23@gmail.com

## Troubleshooting:
- If emails don't arrive, check your Gmail spam folder
- Verify all environment variables are correct
- Check the browser console for any error messages
- Make sure your EmailJS service is active and not suspended