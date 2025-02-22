"""
URL configuration for backend_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
    

    token ko lai request garna :(access ra refresh token dinxa)
    http post http://127.0.0.1:8000/api/token/ username=admin password=12345
    
    mathi bata pako access token rakhne afno:
    http http://127.0.0.1:8000/api/vendors/ "Authorization: Bearer <your_access_token>"

    mero chai garda :
    http http://127.0.0.1:8000/api/vendors/ "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5ODQ0ODU2LCJpYXQiOjE3Mzk4NDQ1NTYsImp0aSI6IjEwYzI3OGM3OWE0Nz
    Q4MGZiMjg1NDAyODAxNWJiNmM1IiwidXNlcl9pZCI6MX0.Few9d79YelzpWZa0GbDYyEm9AhIGnaGUULnHckKxBp4"


    if tyo token expired raixa vane chai yo use garne :
    http http://127.0.0.1:8000/api/token/refresh/ refresh=<expired wala token>'
    
    http http://127.0.0.1:8000/api/token/refresh/ refresh=ey]0eXAi0iJKV1QiLCJhbGci0iJIUzINiJ9.
    eyJob2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2MjY2NjUINSwiaWFOIjoxNjYyNTgwMTUILCJqdGki0iIzNDZmMWYINT
    1jN2E00GNLY jcwZmY4NmUzOGJjOWEOYSIsInVzZXJfawQ10jF9.Mu2NYZ2SBi2huqIXBTEthXOwbxZTOZPrK5RASw4PaJo'
    (this gives new access token and tei use garna milxa balla)


"""




from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('main.urls')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/',include('rest_framework.urls')),
]
  