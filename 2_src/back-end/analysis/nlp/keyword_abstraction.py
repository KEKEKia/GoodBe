from krwordrank.word import summarize_with_keywords
from nlp import json_data_parser as sd
from keybert import KeyBERT
from kiwipiepy import Kiwi
from transformers import BertModel

kiwi = Kiwi()
model = BertModel.from_pretrained('skt/kobert-base-v1')
kw_model = KeyBERT(model)

def keyword_abstraction(keyword):
    data_list = sd.get_job_post_by_keyword(keyword)

    text = ""

    for d in data_list:
        text += d
    nouns = noun_extractor(text)
    text = ' '.join(nouns)
    keywords = kw_model.extract_keywords(text, keyphrase_ngram_range=(1, 1), stop_words=None, top_n=20)
    return keywords

def noun_extractor(text):
    results = []
    result = kiwi.analyze(text)
    for token, pos, _, _ in result[0][0]:
        if len(token) != 1 and pos.startswith('N') or pos.startswith('SL'):
            results.append(token)
    return results
