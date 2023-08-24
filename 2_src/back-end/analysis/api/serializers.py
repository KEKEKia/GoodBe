from rest_framework import serializers
from .models import job_post

class job_post_serializer(serializers.ModelSerializer):
    class Meta:
        model = job_post
        fields = ("__all__")
        #fields = ('name', 'description', 'cost')