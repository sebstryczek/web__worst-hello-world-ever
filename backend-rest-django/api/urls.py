from django.conf.urls import include
from django.urls import path
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token
from .views import EntityViewSet, GroupViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('groups', GroupViewSet)
router.register('entities', EntityViewSet)

api_urls = [
    path('', include(router.urls)),
    path('auth/', obtain_jwt_token),
]
