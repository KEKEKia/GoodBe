from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'
    
    def ready(self) -> None:
        from keybert import KeyBERT
        from transformers import BertModel

        model = BertModel.from_pretrained('skt/kobert-base-v1')
        kw_model = KeyBERT(model)
