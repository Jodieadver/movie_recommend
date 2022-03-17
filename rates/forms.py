from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User
from members.models import Rating,RATE_CHOICES

class RateForm(forms.ModelForm):
     class Meta:
            model = Rating
            fields = ('user','movie_id','rating')
            # def __init__(self, *args, **kwargs):
            #     super(RateForm, self).__init__(*args, **kwargs)
            #     self.fields['rating'].widget.attrs['class'] = 'score_submit'
            # fields = '__all__'
#     # username = None
#     # rate= forms.CharField(widget=forms.Select(choices=RATE_CHOICES))
#     # text=forms.CharField(widget=forms.Textarea(attrs={'class':'materialize-textarea'}),required=False)
#     # rate = forms.ChoiceField(choices=RATE_CHOICES, widget=forms.Select(), required=True)
#     class Meta:
#         model = Rating
#         fields = ('rating')
#         # fields = ('text','rate','movie_id','user','movie_title']
#     #
