import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
	toasts: any[] = [];

	show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
		this.toasts.push({ textOrTpl, ...options });
	}

	remove(toast) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}


    showStandard() {
		this.show('I am a standard toast');
	}

	showSuccess(text: string) {
		this.show(text, { classname: 'bg-success text-light', delay: 2000, icon: 'assets/images/icons8-ok.svg'});
	}

	showSuccessDanger(text: string) {
		this.show(text, { classname: 'bg-danger text-light', delay: 2000, icon: 'assets/images/icons8-3-ok.svg'});
	}

    
	showFailDanger(text: string) {
		this.show(text, { classname: 'bg-danger text-light', delay: 2000, icon: 'assets/images/icons8-1-cancel.svg'});
	}

    ngOnDestroy(): void {
		this.clear();
	}
}