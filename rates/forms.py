from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User
from members.models import Rating,RATE_CHOICES

class RateForm(forms.Form):
    # username = None
    rate= forms.CharField(widget=forms.Select(choices=RATE_CHOICES))

    # rate = forms.ChoiceField(choices=RATE_CHOICES, widget=forms.Select(), required=True)
    class Meta:
        model = Rating
        fields = ['rate','movie_id','user','movie_title']
    #
    def __init__(self, *args, **kwargs):
        super(RateForm, self).__init__(*args, **kwargs)
        self.fields['rate'].widget.attrs['class'] = 'score_submit'
