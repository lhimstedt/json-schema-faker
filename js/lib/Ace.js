/* src/web/js/lib/Ace.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	space,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { onMount, createEventDispatcher } from "svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let div0_class_value;
	let t;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			t = space();
			if (default_slot) default_slot.c();
			attr(div0, "class", div0_class_value = "Ace " + /*cssClass*/ ctx[0]);
			attr(div1, "class", "Ace-wrapper rel");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			/*div0_binding*/ ctx[9](div0);
			append(div1, t);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*cssClass*/ 1 && div0_class_value !== (div0_class_value = "Ace " + /*cssClass*/ ctx[0])) {
				attr(div0, "class", div0_class_value);
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], !current ? -1 : dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			/*div0_binding*/ ctx[9](null);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { class: cssClass = "" } = $$props;
	let { mode = "javascript" } = $$props;
	let { theme = "github" } = $$props;
	let { value = "" } = $$props;
	let { readonly = false } = $$props;
	let target;
	let targetElement;
	const dispatch = createEventDispatcher();

	/* global ace */
	onMount(() => {
		$$invalidate(6, targetElement = ace.edit(target));
		targetElement.session.setTabSize(2);
		targetElement.setShowPrintMargin(false);
		targetElement.setOption("showLineNumbers", false);
		if (readonly) targetElement.setReadOnly(true);

		targetElement.session.on("change", () => {
			dispatch("change", targetElement.getValue());
		});

		return () => targetElement.destroy();
	});

	function div0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			target = $$value;
			$$invalidate(1, target);
		});
	}

	$$self.$$set = $$props => {
		if ("class" in $$props) $$invalidate(0, cssClass = $$props.class);
		if ("mode" in $$props) $$invalidate(2, mode = $$props.mode);
		if ("theme" in $$props) $$invalidate(3, theme = $$props.theme);
		if ("value" in $$props) $$invalidate(4, value = $$props.value);
		if ("readonly" in $$props) $$invalidate(5, readonly = $$props.readonly);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*targetElement, value, theme, mode*/ 92) {
			$: if (targetElement) {
				if (targetElement.getValue() !== value) {
					targetElement.setValue(value);
					targetElement.clearSelection();
				}

				targetElement.setTheme(`ace/theme/${theme}`);
				targetElement.session.setMode(`ace/mode/${mode}`);
			}
		}
	};

	return [
		cssClass,
		target,
		mode,
		theme,
		value,
		readonly,
		targetElement,
		$$scope,
		slots,
		div0_binding
	];
}

class Ace extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			class: 0,
			mode: 2,
			theme: 3,
			value: 4,
			readonly: 5
		});
	}
}

export default Ace;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FsdmFyby9Xb3Jrc3BhY2UvanNvbi1zY2hlbWEtZmFrZXIvc3JjL3dlYi9qcy9saWIvQWNlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgeyBvbk1vdW50LCBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXG4gIGxldCBjc3NDbGFzcyA9ICcnO1xuXG4gIGV4cG9ydCBsZXQgbW9kZSA9ICdqYXZhc2NyaXB0JztcbiAgZXhwb3J0IGxldCB0aGVtZSA9ICdnaXRodWInO1xuICBleHBvcnQgbGV0IHZhbHVlID0gJyc7XG4gIGV4cG9ydCBsZXQgcmVhZG9ubHkgPSBmYWxzZTtcblxuICBleHBvcnQgeyBjc3NDbGFzcyBhcyBjbGFzcyB9O1xuXG4gIGxldCB0YXJnZXQ7XG4gIGxldCB0YXJnZXRFbGVtZW50O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cbiAgLyogZ2xvYmFsIGFjZSAqL1xuICBvbk1vdW50KCgpID0+IHtcbiAgICB0YXJnZXRFbGVtZW50ID0gYWNlLmVkaXQodGFyZ2V0KTtcbiAgICB0YXJnZXRFbGVtZW50LnNlc3Npb24uc2V0VGFiU2l6ZSgyKTtcbiAgICB0YXJnZXRFbGVtZW50LnNldFNob3dQcmludE1hcmdpbihmYWxzZSk7XG4gICAgdGFyZ2V0RWxlbWVudC5zZXRPcHRpb24oJ3Nob3dMaW5lTnVtYmVycycsIGZhbHNlKTtcblxuICAgIGlmIChyZWFkb25seSkgdGFyZ2V0RWxlbWVudC5zZXRSZWFkT25seSh0cnVlKTtcblxuICAgIHRhcmdldEVsZW1lbnQuc2Vzc2lvbi5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goJ2NoYW5nZScsIHRhcmdldEVsZW1lbnQuZ2V0VmFsdWUoKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4gdGFyZ2V0RWxlbWVudC5kZXN0cm95KCk7XG4gIH0pO1xuXG4gICQ6IGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgaWYgKHRhcmdldEVsZW1lbnQuZ2V0VmFsdWUoKSAhPT0gdmFsdWUpIHtcbiAgICAgIHRhcmdldEVsZW1lbnQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgdGFyZ2V0RWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIHRhcmdldEVsZW1lbnQuc2V0VGhlbWUoYGFjZS90aGVtZS8ke3RoZW1lfWApO1xuICAgIHRhcmdldEVsZW1lbnQuc2Vzc2lvbi5zZXRNb2RlKGBhY2UvbW9kZS8ke21vZGV9YCk7XG4gIH1cbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiQWNlLXdyYXBwZXIgcmVsXCI+XG4gIDxkaXYgY2xhc3M9XCJBY2Uge2Nzc0NsYXNzfVwiIGJpbmQ6dGhpcz17dGFyZ2V0fSAvPlxuICA8c2xvdCAvPlxuPC9kaXY+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUNXLE9BQU8sRUFBRSxxQkFBcUIsUUFBUSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztnRUE0Q3RDLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7NEdBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0ExQ3JCLFFBQVEsR0FBRyxFQUFFO09BRU4sSUFBSSxHQUFHLFlBQVk7T0FDbkIsS0FBSyxHQUFHLFFBQVE7T0FDaEIsS0FBSyxHQUFHLEVBQUU7T0FDVixRQUFRLEdBQUcsS0FBSztLQUl2QixNQUFNO0tBQ04sYUFBYTtPQUVYLFFBQVEsR0FBRyxxQkFBcUI7OztDQUd0QyxPQUFPO2tCQUNMLGFBQWEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07RUFDL0IsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUNsQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsS0FBSztFQUN0QyxhQUFhLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEtBQUs7TUFFNUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSTs7RUFFNUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUTtHQUMvQixRQUFRLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxRQUFROzs7ZUFHOUIsYUFBYSxDQUFDLE9BQU87Ozs7O0dBZUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztHQVo3QyxDQUFDLE1BQU0sYUFBYTtRQUNkLGFBQWEsQ0FBQyxRQUFRLE9BQU8sS0FBSztLQUNwQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUs7S0FDNUIsYUFBYSxDQUFDLGNBQWM7OztJQUc5QixhQUFhLENBQUMsUUFBUSxjQUFjLEtBQUs7SUFDekMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLGFBQWEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9