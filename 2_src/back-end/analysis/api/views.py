from django.shortcuts import render
from rest_framework import viewsets
from .serializers import job_post_serializer
from .models import job_post
from rest_framework.decorators import api_view
from rest_framework.response import Response
from nlp import keyword_abstraction as ka
from nlp import json_data_parser as jp

@api_view(['GET'])
def get_keyword_abstraction(request, keyword):
    word_list = ka.keyword_abstraction(keyword)

    word = ""

    for w in word_list:
        word += w[0]
        word += " "

    data = jp.get_edu_by_keyword(word)
    return Response(data)

@api_view(['GET'])
def get_keyword_abstraction_test(request, keyword):
    word_list = ka.keyword_abstraction(keyword)

    word = ""

    for w in word_list:
        word += w[0]
        word += " "

    return Response(word)