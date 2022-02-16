import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'Component/ContentWrapper';
import { PRECESSED_STEPS } from './Checkout.config'
import ProccessedBar from 'Component/ProccessedBar/ProccessedBar.component';

class Checkout extends SourceCheckout {
	render() {
		return (
			<main block='Checkout'>
				<ProccessedBar 
					proccessedSteps={PRECESSED_STEPS} 
					pathname={this.props.location.pathname}
					finalStepPathName="/checkout/success"
				/>
				<ContentWrapper wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }} label={__('Checkout page')}>
					{this.renderSummary(true)}
					<div block='Checkout' elem='Step'>
						{this.renderTitle()}
						{this.renderGuestForm()}
						{this.renderStep()}
						{this.renderLoader()}
					</div>
					<div>
						{this.renderSummary()}
						{this.renderPromo()}
						{this.renderCoupon()}
					</div>
				</ContentWrapper>
			</main>
		);
	}
}

export default Checkout;