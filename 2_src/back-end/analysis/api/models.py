from django.db import models

class job_post(models.Model):
    content_id = models.CharField(max_length=40)
    company_data = models.TextField()
    company_url = models.TextField()
    job_content = models.TextField()
    sal = models.TextField()
    job_data = models.TextField()
