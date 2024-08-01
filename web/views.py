from django.http import HttpResponse
from django.shortcuts import render

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
