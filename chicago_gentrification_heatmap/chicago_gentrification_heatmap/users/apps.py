from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "chicago_gentrification_heatmap.users"
    verbose_name = _("Users")

    def ready(self):
        try:
            import chicago_gentrification_heatmap.users.signals  # noqa F401
        except ImportError:
            pass
