import { PureComponent } from 'react';

import './ProccessedBar.style';

class ProccessedBar extends PureComponent {
  render() {
		const { proccessedSteps, pathname, finalStepPathName } = this.props;
		return (
			<div block='Wrapper'>
				<div block='Line Start' />
				<div block='Content'>
					{proccessedSteps.map((step, index) => {
						const activeIdx = proccessedSteps.findIndex(el => el.currentPathName === pathname)
            console.log(activeIdx > index);
						return index !== 0 ? (
							<>
								<div block={`MiddleLine ${(activeIdx >= index && 'Active') || (pathname === finalStepPathName && 'Active')}`}>
									<div block='Background' />
								</div>
								<div block={`Content__item ${(activeIdx >= index && 'Active') || (pathname === finalStepPathName && 'Active')}`} key={step.id}>
									<div block='Content__item-number'>{activeIdx > index || pathname === finalStepPathName ? <div block='Success-icon' /> : step.id}</div>
									<div block='Content__item-text'>{step.title}</div>
								</div>
							</>
						) : (
							<div block={`Content__item ${(activeIdx >= index && 'Active') || (pathname === finalStepPathName && 'Active')}`} key={step.id}>
								<div block='Content__item-number'>{activeIdx > index || pathname === finalStepPathName ? <div block='Success-icon' /> : step.id}</div>
								<div block='Content__item-text'>{step.title}</div>
							</div>
						);
					})}
				</div>
				<div block={`Line End ${pathname === finalStepPathName && 'Active'}`}>
					<div block='Background' />
				</div>
			</div>
		);
	}
}

export default ProccessedBar;