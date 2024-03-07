from django.shortcuts import render
from .serializers import UserSerializer, UserRegistrationSerializer
from .models import User
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    @action(detail=False, methods=['post'])
    def signup(self, request, *args, **kwargs):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
