from django.http import HttpResponse
from django.shortcuts import render, redirect

def homePage(request):
    return render(request,"index.html")

def about(request):
    return render(request,"about.html")

def contact(request):
    return render(request,"contact.html")

def portfolio(request):
    return render(request,"portfolio.html")

def do(request):
    return render(request,"do.html")


# def contact_view(request):
#     if request.method == 'POST':
#         form = ContactForm(request.POST)
#         if form.is_valid():
#             full_name = form.cleaned_data['fullname']
#             phone_number = form.cleaned_data['phone']
#             email_address = form.cleaned_data['email']
#             message = form.cleaned_data['message']
            
#             send_mail(
#                 f'New Contact Form Submission from {full_name}',
#                 f'Name: {full_name}\nPhone: {phone_number}\nEmail: {email_address}\nMessage: {message}',
#                 'your-email@gmail.com',  # From email
#                 ['recipient-email@gmail.com'],  # To email
#                 fail_silently=False,
#             )
#             return redirect('success_page')
#     else:
#         form = ContactForm()
#     return render(request, 'contact.html', {'form': form})

# def success_page(request):
#     return render(request, 'success.html')