import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import FirstContent from '../../signUpComp/FirstContent';
import SecondContent from '../../signUpComp/SecondContent';

const SignUp = () => {
  const [showFirstContent, setShowFirstContent] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Switch content after 2 seconds with fade animation
    const timer = setTimeout(() => {
      // Fade out first content
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setShowFirstContent(false);
        // Fade in second content
        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 2500);

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <ScreenWrapper bg='white'>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {showFirstContent ? (
          <FirstContent />
        ) : (
          <SecondContent />
        )}
      </Animated.View>
    </ScreenWrapper>
  )
}

export default SignUp