from django.contrib.auth import login
from django.shortcuts import render, redirect
from django.views import View
from .forms import UserRegistrationForm, VerifyCodeForm
import random
from utils import send_otp_code
from .models import OtpCode, User
from django.contrib import messages


class UserRegisterView(View):
    form_class = UserRegistrationForm
    template_name = 'accounts/register.html'

    def get(self, request):
        form = self.form_class
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            # user = User.objects.filter(phone_number=cd['phone_number'])
            # if cd['email'].exists() or cd['phone_number'].exists():
            #     messages.error(request, 'entered email or phone number is exists', 'danger')
            #     return redirect('accounts:user_register')

            random_code = random.randint(1000, 9999)
            send_otp_code(cd['full_name'], cd['email'], random_code)

            last_code = OtpCode.objects.filter(email=cd['email'])
            if last_code:
                last_code = last_code[0]
                last_code.code = random_code
                last_code.save()
            else:
                OtpCode.objects.create(email=cd['email'], code=random_code)

            request.session['user_registration_info'] = {
                'phone_number': cd['phone'],
                'email': cd['email'],
                'full_name': cd['full_name'],
                'password': cd['password'],
            }

            messages.success(request, 'we sent you a code', 'success')
            return redirect('accounts:verify_code')
        return render(request, self.template_name, {'form': form})


class UserRegisterVerifyCodeView(View):
    form_class = VerifyCodeForm

    def get(self, request):
        form = self.form_class
        return render(request, 'accounts/verify.html', {'form': form})

    def post(self, request):
        user_session = request.session['user_registration_info']
        code_instance = OtpCode.objects.get(email=user_session['email'])
        form = self.form_class(request.POST)
        if form.is_valid():
            cd = form.cleaned_data

            if cd['code'] == code_instance.code:
                user = User.objects.create_user(user_session['phone_number'], user_session['email'],
                                         user_session['full_name'], user_session['password'])

                code_instance.delete()
                messages.success(request, 'you registered successfully', 'success')
                login(request, user)
                return redirect('home:home')
            else:
                messages.error(request, 'entered cod is wrong', 'danger')
                return redirect('accounts:verify_code')

        # todo why redirect to home when form is not valid?
        return redirect('home:home')


class UserLoginView(View):
    template_name = 'accounts/login.html'

    def get(self, request):
        return render(request, self.template_name)

    def post(self, request):
        email = request.POST['email']
        password = request.POST['pass']
        user = User.objects.filter(email=email)

        if not user:
            return redirect('accounts:user_register')

        user = user[0]
        if not user.check_password(password):
            return redirect('accounts:user_login')

        login(request, user)
        return redirect('home:home')
