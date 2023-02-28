interface RippleHost {
	appendChild(child: HTMLElement): void;
}

export default function ripple(this: RippleHost, event: MouseEvent): void {
	let rippleStartX = event.clientX - (event.target as HTMLElement).offsetLeft;
	let rippleStartY = event.clientY - (event.target as HTMLElement).offsetTop;

	let ripple = document.createElement('div');
	ripple.className = 'ripple';
	ripple.style.left = rippleStartX + 'px';
	ripple.style.top = rippleStartY + 'px';

	this.appendChild(ripple);

	setTimeout(() => {
		ripple.remove();
	}, 500);
}
